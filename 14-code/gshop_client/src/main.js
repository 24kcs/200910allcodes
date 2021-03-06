// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入router
import router from './router'
// 引入store
import store from './store'
// 引入TypeNav组件
import TypeNav from './components/TypeNav'
// 执行一次swiper的插件文件
import './plugins/swiper'
// 引入mock的文件
import './mock'
// 引入分页组件Pagination
import Pagination from '@/components/Pagination'
// 设置浏览器的控制台中不显示默认的提示信息
Vue.config.productionTip = false
// 把TypeNav组件注册成全局的公共组件
Vue.component('TypeNav',TypeNav)
Vue.component('Pagination',Pagination)
// 实例化Vue
new Vue({
  // 数据初始化之前的生命周期回调钩子
  beforeCreate () {
    Vue.prototype.$bus = new Vue()
  },
  render: h => h(App),
  // 注册路由器
  router,
  // 注册store
  store
}).$mount('#app')
