<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">{{
          m.title
        }}</router-link>
        ---
        <button>push查看</button>
        ---
        <button>replace查看</button>
      </li>
    </ul>

    <hr />
    <button>返回</button>
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
}
</script>
<style scoped>
</style>