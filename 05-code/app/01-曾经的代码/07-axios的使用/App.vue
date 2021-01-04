<template>
  <h2 v-if="!repUrl">正在加载中...</h2>
  <h2 v-else>
    Most Star is <a :href="repUrl">{{ repName }}</a>
  </h2>
</template>
<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      repUrl: '', // 存储的是该技术对应的地址
      repName: '', // 存储的是该技术的名字
    }
  },
  mounted() {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    // axios
    //   .get(url)
    //   .then((response) => {
    //     const result =response.data.items[0]
    //     this.repUrl = result.html_url
    //     this.repName = result.name
    //   })
    //   .catch((error) => {
    //     console.log(error.message || '未知错误')
    //   })
    // 简化版
    // 更好的写法
    // 调用了一个方法,用来获取名字和地址信息数据
    this.getUrlAndName(url)
  },
  methods: {
    async getUrlAndName(url) {
      try {
        // 发送请求
        const promise = await axios.get(url)
        // 获取信息
        const result = promise.data.items[0]
        this.repUrl = result.html_url
        this.repName = result.name
      } catch (error) {
        console.log(error.message || '未知错误')
      }
    },
  },
}
</script>
<style scoped>
</style>