<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="title"
        @keyup.13="handleSearch"
      />
      <button @click="handleSearch">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      title: '', // 收集文本框中输入的数据
    }
  },
  methods: {
    // 该方法的作用,传递参数及分发事件(search)
    handleSearch() {
      // 获取文本框中的数据
      const title = this.title.trim()
      // 判断操作
      if (!title) return

      // 信息存在,然后传参及分发事件
      this.$bus.$emit('search', title)

      // 最终清空文本框数据
      this.title = ''
    },
  },
}
</script>
<style scoped>
</style>