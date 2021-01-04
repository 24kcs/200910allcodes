<template>
  <h2 v-if="firstView">请输入搜索关键字....</h2>
  <h2 v-else-if="loading">正在加载中....</h2>
  <h2 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.html_url" >
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
import axios from 'axios'
export default {
  name: 'Main',
  data() {
    return {
      firstView: true, // 默认第一个显示的提示信息的标识
      loading: false, // 加载提示信息
      errorMsg: '', // 错误提示信息
      users: [], // 用户信息数组
    }
  },
  mounted() {
    this.$bus.$on('search', async (searchName) => {
      const url = `https://api.github.com/search/users`
      this.firstView = false
      this.loading = true
      try {
        const result = await axios.get(url, {
          params: {
            q: searchName,
          },
        })
        const users = result.data.items.map(item=>({
          loading:item.login,
          html_url:item.html_url,
          avatar_url:item.avatar_url
        }))

        this.loading = false
        this.users = users
      } catch (error) {
        this.loading = false
        this.errorMsg = error.message
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