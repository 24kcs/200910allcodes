// 引入Vue
import Vue from 'vue'
// 引入App父级组件
import App from './App.vue'
// 设置浏览器的控制台中默认的提示信息不显示
Vue.config.productionTip = false
// 事件总线
/**
 * new Vue()的时候产生了Vue的实例对象,该对象中有$on,$emit,$off
 * 所有的组件都是间接继承自Vue.prototype
 * 每个组件实例对象中的$bus属性指向的都是同一个Vue的实例对象，都可以访问该对象上的属性
 * 
 */
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
