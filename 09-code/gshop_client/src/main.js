// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入router
import router from './router'
// 引入TypeNav组件
import TypeNav from './components/TypeNav'
// 设置浏览器的控制台中不显示默认的提示信息
Vue.config.productionTip = false
// 把TypeNav组件注册成全局的公共组件
Vue.component('TypeNav',TypeNav)
// 实例化Vue
new Vue({
  render: h => h(App),
  // 注册路由器
  router
}).$mount('#app')
