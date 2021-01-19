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

const router = new VueRouter({
  mode: 'history', // 不带#
  routes,
  // 设置路由跳转的时候,滚动的位置
  scrollBehavior (to, from, savedPosition) {
    // x---横坐标,y----纵坐标
    return { x: 0, y: 0 }
  }
})
// 实例化路由器并暴露出去
export default router