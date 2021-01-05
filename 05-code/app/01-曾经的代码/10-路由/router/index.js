import routes from './routes'
// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 声明使用插件
Vue.use(VueRouter)
// 实例化路由器对象,并暴露出去
export default new VueRouter({
  // mode:'hash', // 带#的,默认的模式
  mode: 'history', // 不带#
  // 存放多个路由的
  routes
})