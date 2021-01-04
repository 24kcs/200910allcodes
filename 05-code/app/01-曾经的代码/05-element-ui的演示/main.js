// 引入Vue
import Vue from 'vue'
// 引入App父级组件
import App from './App.vue'
// import ElementUI from  'element-ui'
// 引入样式文件
// import 'element-ui/lib/theme-chalk/index.css';
// // 声明使用插件
// Vue.use(ElementUI);
import { Button } from 'element-ui';
// 把Button组件设置为全局的公共的组件
Vue.component(Button.name, Button);
// 设置浏览器的控制台中默认的提示信息不显示
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
