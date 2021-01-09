// 引入Home组件
import Home from '@/pages/Home'
// 引入Search组件
import Search from '@/pages/Search'
// 引入Login组件
import Login from '@/pages/Login'
// 引入Register组件
import Register from '@/pages/Register'

export default [
  // Home路由
  {
    path: '/',
    component: Home
  },
  // Search路由
  {
    // params 的方式传参
    path: '/search/:keyword?', // ? 的作用,是参数可以传可不传
    name:'search',
    // query 的方式传参
    // path:'/search',
    component: Search
  },
  // Login路由
  {
    path: '/login',
    component: Login
  },
  // Register路由
  {
    path: '/register',
    component: Register
  },
  // 路由的重定向
  {
    path: '/',
    redirect: '/'
  }
]