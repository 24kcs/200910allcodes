<template>
  <div>
    <h2>App父级组件</h2>
    <hr>
    <Header/>
  </div>
</template>
<script>
// 引入子级组件
import Header from './components/Header'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header
  }
}
</script>
<style scoped>
div{
  background-color: green;
}
div h2{
  color: pink;
}
</style>
