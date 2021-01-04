// 引入Vue
import Vue from 'vue'
// 引入App父级组件
import App from './App.vue'
// 组件:具有特定功能效果的集合,里面有html+css+js ,其实组件也是个对象
// 设置浏览器的控制台中默认的提示信息不显示
Vue.config.productionTip = false
// $bus 可以直接调用$on() 绑定事件, $emit()分发事件
// 任意的一个组件都继承自Vue的prototype
Vue.prototype.$bus =  new Vue()
// 实例化Vue,并挂载对应的App组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
