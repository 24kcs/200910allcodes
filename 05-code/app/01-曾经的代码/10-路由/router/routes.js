// 引入About组件
import About from '../pages/About.vue'
// 引入Home组件
import Home from '../pages/Home.vue'
// 引入News
import News from '../pages/News.vue'
// 引入Message
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  // 注册路由:地址和组件之间发生关系
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    // 子路由----二级路由
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/home/message',
        component: Message,
        children:[
          {
            // :id  : ----->  占位
            // params的方式传参
            path:'/home/message/detail/:id',  // 地址的名字未必一定要和组件的名字一样
            component:MessageDetail,
            // 函数的形式
            props: (route) => ({ id: route.params.id }) 
          }
        ]
      },
      {
        path: '/home', 
        redirect: '/home/news' 
      }
    ]
  },
  {
    path: '/', // 根路径
    redirect: '/about' // 重新定向到/about地址
  }
]