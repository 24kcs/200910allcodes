// 引入Vue
import Vue from 'vue'
// 引入App父级组件
import App from './App.vue'

// 引入router
import router from './router'


// 设置浏览器的控制台中默认的提示信息不显示
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  // 注册路由器
  router
})
