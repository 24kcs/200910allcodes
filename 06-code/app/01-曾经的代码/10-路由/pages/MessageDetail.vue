<template>
  <ul>
    <!-- <li>ID:{{ $route.params.id }}</li> -->
     <li>ID:{{ id }}</li>
    <li>TITLE:{{ detail.title }}</li>
    <li>CONTENT:{{ detail.content }}</li>
  </ul>
</template>
<script>
export default {
  name: 'MessageDetail',
  props:['id'],
  data() {
    return {
      messageDetails: [
        { id: 1, title: 'message001', content: 'content001' },
        { id: 3, title: 'message003', content: 'content003' },
        { id: 5, title: 'message005', content: 'content005' },
      ],
      detail: {}, // 存储的是找到的对象
    }
  },
  // 只会执行一次
  mounted() {
    // console.log(this.$route.params.id)
    // 获取路由跳转的时候传递过来的参数
    // const id = this.$route.params.id * 1
    // this.detail = this.messageDetails.find((item) => item.id === id)
     this.getDetailByRoute(this.$route)
     console.log(this.id)
  },
  watch: {
    // 监视路由信息对象
    $route(val) {
      // val 就是$route
      // const id = val.params.id * 1
      // this.detail = this.messageDetails.find((item) => item.id === id)
      this.getDetailByRoute(val)
    },
  },
  methods: {
    getDetailByRoute(route){
       const id = route.params.id * 1
      this.detail = this.messageDetails.find((item) => item.id === id)
    }
  }
}
</script>
<style scoped>
</style>