// 引入Home组件
import Home from '@/pages/Home'
// 引入Search组件
import Search from '@/pages/Search'
// 引入Login组件
import Login from '@/pages/Login'
// 引入Register组件
import Register from '@/pages/Register'
// 引入Detail组件
import Detail from '@/pages/Detail'
// 引入AddCartSuccess组件
import AddCartSuccess from '@/pages/AddCartSuccess'
// 引入ShopCart组件
import ShopCart from '@/pages/ShopCart'

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
    name: 'search',
    // query 的方式传参
    // path:'/search',
    component: Search
  },
  // Login路由
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true // 默认隐藏底部的
    }
  },
  // Register路由
  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/detail/:skuId',
    name: 'detail',
    component: Detail
  },
  // AddCartSuccess路由
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess
  },
  // ShopCart路由
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  },
  // 路由的重定向
  {
    path: '/',
    redirect: '/'
  }
]