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
// 引入Trade组件
import Trade from '@/pages/Trade'
// 引入Pay组件
import Pay from '@/pages/Pay'
// 引入PaySuccess组件
import PaySuccess from '@/pages/PaySuccess'
// 引入center组件
import Center from '@/pages/Center'
// 引入store
// import store from '@/store'

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
    },
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   // 判断是否已经登录过了,如果已经登录,直接跳转到首页
    //   const userInfo = store.state.user.userInfo
    //   if (userInfo.name) {
    //     next('/')
    //   } else {
    //     // 没有登录,直接就进入到登录界面就可以了
    //     next()
    //   }

    // }
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
    component: AddCartSuccess,
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   // 判断能够进入到当前的界面,只能是从/detail界面过来
    //   // console.log(from.path)

    //   if (from.path.startsWith('/detail')) {
    //     next()
    //   } else {
    //     next('/shopcart')
    //   }
    // }
  },
  // ShopCart路由
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  },
  // Trade路由
  {
    path: '/trade',
    component: Trade,
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 判断是不是从/shopcart来到的/trade
      if (from.path === '/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  // Pay路由
  {
    path: '/pay',
    component: Pay,
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 判断是不是从/shopcart来到的/trade
      if (from.path === '/trade') {
        next()
      } else {
        next('/trade')
      }
    }
  },
  // PaySuccess路由
  {
    path: '/paysuccess',
    component: PaySuccess,
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 判断是不是从/shopcart来到的/trade
      if (from.path === '/pay') {
        next()
      } else {
        next('/pay')
      }
    }
  },
  // Center路由
  {
    path: '/center',
    component: Center
  },
  // 路由的重定向
  {
    path: '/',
    redirect: '/'
  }
]