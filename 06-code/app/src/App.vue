<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
        <!-- class="list-group-item" -->
       <!--路由链接,router-link最终成了a标签,所以,都可以-->
       <router-link to="/about" class="list-group-item">About</router-link>
       <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--路由视图-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  // mounted () {
  //   console.log(this)
  // }
}
</script>
<style scoped>
</style>