<!--最终在页面中是不会出现的-->
<template>
  <!--模版中只能有一对根标签-->
  <div id="app">
    <!--src目录中assets目录存放的静态资源主要是给各个组件使用的,该目录有无都可以-->
    <img src="./assets/logo.png">
    <!--组件标签:组件当成标签使用-->
    <HelloWorld/>
  </div>
</template>

<script>
// components目录中存放多个组件文件的目录
// 引入了一个子级组件,后缀名可以省略
import HelloWorld from './components/HelloWorld'
// 向外暴露一个对象(暴露出去的是一个组件对象)
export default {
  // 当前组件的名字
  name: 'App',
  // 注册组件
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
