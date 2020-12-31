// 引入Vue
import Vue from 'vue'
// 引入App父级组件
import App from './App.vue'
// 组件:具有特定功能效果的集合,里面有html+css+js ,其实组件也是个对象
// 设置浏览器的控制台中默认的提示信息不显示
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 实例化Vue,并挂载对应的App组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
