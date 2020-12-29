; (function (window) {
  // 定义一个对象
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log('全局的方法')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
        el.innerHTML = binding.value + '-----我的插件'
      }
    })


    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('这是一个实例的方法')
    }
  }

  // 暴露给window
  window.MyPlugin = MyPlugin

})(window);