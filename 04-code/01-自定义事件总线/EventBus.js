; (function (window) {

  /**
   * 
   * on方法----绑定事件
   * emit方法---分发事件
   * off方法---解绑事件
   * 
   * on方法中的参数
   * eventName-----事件类型/事件名字 
   * listener------事件监听的回调
   * 
   * emit方法中的参数
   * eventName----事件类型/事件名字 
   * data----事件回调的参数
   * 
   * off方法中的参数
   * eventName----事件类型/事件名字 
   * 无
   * 
   * 
   * 
   */
  // 事件总线原理:
  // 事件总线对象
  const EventBus = {}
  // 大容器对象----存储的是事件类型及对应的回调函数的数组 ,以键值对的方式存储
  let listenerContainer = {}
  // 绑定事件
  // {add:[f1],del:[f4]}
  // EventBus.on('update',f10)
  EventBus.on = function (eventName, listener) {
    // 判断当前的事件有没有对应的数组容器
    let listeners = listenerContainer[eventName]
    // 判断当前存储回调函数的数组容器是否存在
    if (!listeners) {
      // 创建存储回调函数的数组容器
      listeners = []
      // 把事件名字和数组容器以键值对的方式存储到大的容器对象中
      listenerContainer[eventName] = listeners
    }
    listeners.push(listener)
  }

  // 分发事件
  //  {add:[f1,f2,f3],del:[f4]}
  // EventBus.emit('add',100)
  EventBus.emit = function (eventName, data) {
    // 判断当前的事件有没有对应的数组容器
    let listeners = listenerContainer[eventName]
    if (listeners && listeners.length > 0) {
      listeners.forEach(listener => {
        listener(data)
      })
    }
  }

  // 解绑事件
  //  {add:[f1,f2,f3],del:[f4]}
  EventBus.off = function (eventName) {
    // 没有传入任何的事件类型/名字
    if (typeof eventName === 'undefined') {
      // 干掉全部的事件
      listenerContainer = {}
    } else {
      // listenerContainer[eventName] =[]
      delete listenerContainer[eventName]
    }
  }

  // 暴露出去
  window.EventBus = EventBus
})(window);