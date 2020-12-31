; (function (window) {
  const EventBus = {}
  let listenerContainer = {}
  EventBus.on = function (eventName, listener) {
    let listeners = listenerContainer[eventName]
    if (!listeners) {
      listeners = []
      listenerContainer[eventName] = listeners
    }
    listeners.push(listener)
  }
  EventBus.emit = function (eventName, data) {
    let listeners = listenerContainer[eventName]
    if (listeners) {
      listeners.forEach(listener => {
        listener(data)
      })
    }
  }
  EventBus.off = function (eventName) {
    if (typeof eventName === 'undefined') {
      listenerContainer = {}
    } else {
      // listenerContainer[eventName] = []
      delete listenerContainer[eventName]
    }
  }

  window.EventBus = EventBus
})(window);