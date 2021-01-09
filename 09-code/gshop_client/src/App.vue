<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// 引入Header组件
import Header from './components/Header'
// 引入Footer组件
import Footer from './components/Footer'
// 引入axios
import {reqBaseCategoryList} from './api'
export default {
  name:'App',
  components: {
    Header,
    Footer
  },
  // 页面加载后发送异步请求,获取数据
  async mounted () {
    //  const url =`http://39.99.186.36/api/product/getBaseCategoryList`
    //  const result = await axios.get(url)
    //  console.log(result.data)
     const result = await reqBaseCategoryList()
     console.log(result)

  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>