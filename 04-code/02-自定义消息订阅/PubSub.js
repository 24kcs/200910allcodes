(function (window) {

  /**
   * 
   * PubSub消息订阅对象
   * 大的容器存储的是不同的消息
   * 消息相当于事件类型(事件名字)
   * subscribe---订阅消息----
   * msg----消息名字
   * subscriber----回调函数
   * 
   * publishSync----发布消息----
   * msg----消息名字
   * data----回调所需要的参数数据
   * 
   * publish----发布消息----
   * msg----消息名字
   * data----回调所需要的参数数据
   * unsubscribe----取消消息订阅
   * token---标识
   * 
   * 
   * 
   * 
   */



  // 定义消息订阅对象
  const PubSub = {}
  // 标识
  let id = 0
  // 大容器对象
  let subscriberContainer = {}
  // 订阅消息
  // PubSub.subscribe('add',f1)    {add:{'id_1':f1,'id_2':f2}---小容器对象}
  // var token = PubSub.subscribe('add',f2)   
  // PubSub.subscribe('add',f3)   
  PubSub.subscribe = function (msg, subscriber) {
    // 获取当前的消息名字对应的小的容器对象
    let subscribers = subscriberContainer[msg]
    // 判断小容器对象是否存在
    if (!subscribers) {
      // 如果没有小容器对象,就创建小容器对象
      subscribers = {}
      // 把消息名字和小容器对象以键值对的方式存储到大的容器对象中
      subscriberContainer[msg] = subscribers
      // {'add':{}}
    }
    // id_1
    const token = 'id_' + ++id
    subscribers[token] = subscriber
    return token
  }
  // 同步发布消息
  //  {add:{'id_1':f1,'id_2':f2}}]
  // PubSub.publishSync('add',100)
  PubSub.publishSync = function (msg, data) {
    // 获取当前的消息名字对应的小的容器对象
    let subscribers = subscriberContainer[msg]
    if (subscribers) {
      Object.values(subscribers).forEach(subscriber => {
        subscriber(data)
      })
    }
  }
  // 异步发布消息
  PubSub.publish = function (msg, data) {
    // 获取当前的消息名字对应的小的容器对象
    let subscribers = subscriberContainer[msg]
    setTimeout(() => {
      if (subscribers) {
        Object.values(subscribers).forEach(subscriber => {
          subscriber(data)
        })
      }
    }, 1000);
  }
  // 取消消息订阅
  // 一种情况: 'id_1'  一种情况 : 啥也不传   一种情况: 传入的是消息的名字  一种乱传


  // 参数传值有三种方式:要么是标识,可以不传,可以传入消息名字
  PubSub.unsubscribe = function (token) {
    if (typeof token === 'undefined') {
      subscriberContainer = {}
    } else if (token.indexOf('id_') !== -1) {
      // {add:{'id_1':f1,'id_2':f2},del:{'id_4':f4}}
      // [{'id_1':f1,'id_2':f2},{'id_4':f4}]
      var subscribers = Object.values(subscriberContainer).find(subscribers => subscribers[token])
      subscribers && delete subscribers[token]
    } else {
      // subscriberContainer[token]={}
      delete subscriberContainer[token]
    }
  }

  window.PubSub = PubSub

})(window)


// var obj = {

//   age: 20
// }
// console.log(obj['name'])