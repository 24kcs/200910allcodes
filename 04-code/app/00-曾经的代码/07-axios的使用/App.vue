<template>
  <div>
    <h2 v-if="!repUrl">正在加载中.....</h2>
    <h2 v-else>
      Most Star is
      <a :href="repUrl">{{ repName }}</a>
    </h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      repUrl: '', // 动态访问的地址
      repName: '', // 动态的技术名字
    }
  },
  mounted() {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    this.getUrlAndName(url)
  },
  methods: {
    async getUrlAndName(url){
      const promise = await axios.get(url)
      const result = promise.data.items[0]
      this.repUrl = result.html_url
      this.repName = result.name
    }
  }
}
</script>
<style scoped>
</style>