(function(window){
  const PubSub ={}
  let subscriberContainer = {}
  let id = 0
  PubSub.subscribe = function(msg,subscriber){
    let subscribers = subscriberContainer[msg]
  
    if(!subscribers){
      subscribers={}
      subscriberContainer[msg] = subscribers
    }
    let token = 'id_'+ ++id
    subscribers[token] = subscriber
    return token
  }

  PubSub.publishSync=function(msg,data){
    let subscribers = subscriberContainer[msg]
    if(subscribers){
      Object.values(subscribers).forEach(sub=>{
        sub(data)
      })
    }
  }
  PubSub.publish=function(msg,data){
    let subscribers = subscriberContainer[msg]
    setTimeout(() => {
      if(subscribers){
        Object.values(subscribers).forEach(sub=>{
          sub(data)
        })
      }
    }, 1000);
  }
  PubSub.unsubscribe= function(token){
    if(typeof token === 'undefined'){
      subscriberContainer={}
    }else if(token.indexOf('id_')!==-1){
      let subscribers = Object.values(subscriberContainer).find(subscribers=>subscribers[token])
      subscribers&& delete subscribers[token]
    }else{
      subscriberContainer[token]={}
      // delete subscriberContainer[token]
    }
  }
  window.PubSub=PubSub
})(window)