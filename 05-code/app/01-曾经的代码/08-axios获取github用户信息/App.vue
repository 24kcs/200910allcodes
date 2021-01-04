<template>
  <div class="container">
    <!--Search部分-->
    <Search />
    <!--Main部分-->
    <Main />
  </div>
</template>
<script>
// 引入Search
import Search from './components/Search'
// 引入Main
import Main from './components/Main'
export default {
  name: 'App',
  // 注册组件
  components: {
    Search,
    Main,
  },
}
</script>
<style scoped>
</style>