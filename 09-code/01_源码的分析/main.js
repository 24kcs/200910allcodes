// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 设置浏览器的控制台中不显示默认的提示信息
Vue.config.productionTip = false
// 实例化Vue
new Vue({
  render: h => h(App),
}).$mount('#app')

// $mount('#app') 挂载当前的组件,类似于---el:'#app'
// render:h=>h(App) ,渲染App组件


// render:function(createApp){
//   return createApp(App)
// }
// render:function(h){
//   return h(App)
// }

// render:(h){
//   return h(App)
// }
// render:h=>h(App)