<template>
  <div>
    <h2>Home组件</h2>
    <ul class="nav nav-tabs">
      <!--路由链接-->
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
    </ul>
    <!--路由视图-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
}
</script>
<style scoped>
</style>