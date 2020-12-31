// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 设置浏览器的控制台中是否显示默认的提示信息
Vue.config.productionTip = false
// eslint语法检查关闭注释信息
/* eslint-disable no-new */
new Vue({
  // el---element---->找到index.html文件中id为app的div,进行挂载操作
  el: '#app',
  // 注册组件
  components: { App },
  // 使用App模版组件
  template: '<App/>'
})

// 组件: 具有特定功能效果的集合,内部包含html+css+js,组件也是对象

// 模块/模块化,组件/组件化
