<template>
  <h2 v-if="firstView">请输入搜索关键字...</h2>
  <h2 v-else-if="loading">正在加载中....</h2>
  <h2 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.html_url">
        <img
          :src="user.avatar_url"
          style="width: 100px"
        />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'Main',
  // 状态信息数据对象
  data() {
    return {
      firstView: true, // 第一次界面展示的信息标识
      loading: false, // 是否发送请求的标识
      errorMsg: '', // 存储的是错误信息数据
      users: [], // 用户信息对象数组
    }
  },
  // 页面渲染完毕之后的生命周期钩子(回调),自动执行的
  mounted() {
    // 通过事件总线,绑定事件:search
    this.$bus.$on('search', async (searchName) => {
      // 准备请求的api地址
      const url = `https://api.github.com/search/users`
      // 第一次修改状态数据
      this.firstView = false
      this.loading = true
      try {
        // 通过axios来发送请求
        const promise = await axios.get(url, {
          params: {
            q: searchName,
          },
        })
        // 获取用户信息数据
        const users = promise.data.items.map((item) => ({
          login: item.login,
          avatar_url: item.avatar_url,
          html_url: item.html_url,
        }))

        // 第二次修改状态数据
        this.loading = false
        this.users = users
      } catch (error) {
        // 错误信息
        // 第三次修改状态数据
        this.loading = false
        this.errorMsg = error.message || '未知错误'
      }
    })
  },
}
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>