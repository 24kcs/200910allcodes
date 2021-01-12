// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'
// 声明使用vue-router插件
Vue.use(VueRouter)
// 重写路由器原型对象上的push和replace方法
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete = () => { }, onAbort) {
  return originPush.call(this, location, onComplete, onAbort)
}

const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
  return originReplace.call(this, location, onComplete, onAbort)
}

// 实例化路由器并暴露出去
export default new VueRouter({
  mode: 'history', // 不带#
  routes
})