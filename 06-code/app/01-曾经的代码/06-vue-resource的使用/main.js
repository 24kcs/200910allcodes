// 引入Vue
import Vue from 'vue'
// 引入App父级组件
import App from './App.vue'
import VueResource from 'vue-resource'
// 声明使用插件,有一些插件一定要这样做,此时组件的实例对象中this中就会出现一些不可思议的属性
Vue.use(VueResource)
// 设置浏览器的控制台中默认的提示信息不显示
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
