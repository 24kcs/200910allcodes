<template>
  <h2 v-if="!repUrl">正在加载中...</h2>
  <h2 v-else>
    Most Star is <a :href="repUrl">{{ repName }}</a>
  </h2>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      repUrl: '', // 存储的是该技术对应的地址
      repName: '', // 存储的是该技术的名字
    }
  },
  // 数据初始化完毕
  // created () {

  // },
  // 界面渲染完毕
  // mounted () {
  //   // this中有一个新的属性出现,$http, 就是vue-resource插件起了作用
  //   // console.log(this)
  //   const url =`https://api.github.com/search/repositories?q=v&sort=stars`
  //   // 发送异步请求
  //   this.$http.get(url)
  //   .then(response=>{
  //     // console.log(response)
  //     // 获取响应回来的所有数据中的第一条数据
  //     const result =response.data.items[0]
  //     // console.log(result)
  //     // 更新状态数据
  //     this.repUrl = result.html_url
  //     this.repName = result.name

  //   })
  //   .catch(error=>{
  //     console.log(error.message||'未知错误')
  //   })
  // }

  // 简化版写法
  async mounted() {
    // this中有一个新的属性出现,$http, 就是vue-resource插件起了作用
    // console.log(this)
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    // 发送异步请求
    
    try {
      const promise = await this.$http.get(url)
      // console.log(response)
      // 获取响应回来的所有数据中的第一条数据
      const result = promise.data.items[0]
      // console.log(result)
      // 更新状态数据
      this.repUrl = result.html_url
      this.repName = result.name
    } catch (error) {
      console.log(error.message||'未知错误')
    }
  },
}
</script>
<style scoped>
</style>