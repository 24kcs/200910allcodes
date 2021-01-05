<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <router-link replace :to="`/home/message/detail/${m.id}`">{{
          m.title
        }}</router-link>
        ---
        <button @click="handlePush(m.id)">push查看</button>
        ---
        <button @click="handleReplace(m.id)">replace查看</button>
      </li>
    </ul>

    <hr />
    <button @click="$router.back()">返回</button>
    <hr />
    <!--路由视图-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {
      messages: [],
    }
  },
  // 页面渲染完毕的生命周期钩子
  mounted() {
    // 定时器
    setTimeout(() => {
      this.messages = [
        { id: 1, title: 'message001' },
        { id: 3, title: 'message003' },
        { id: 5, title: 'message005' },
      ]
    }, 1000)
  },
  methods: {
    // push的方式
    handlePush(id){
      // 通过js代码的方式来实现路由跳转   可以认为是有历史记录的
      this.$router.push(`/home/message/detail/${id}`)
    },
    // replace的方式
    handleReplace(id){
      // 通过js代码的方式来实现路由跳转---替换操作   可以认为是没有历史记录的(内部的历史记录存储的不是那么的明细)
       this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>
<style scoped>
</style>