<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchTxt" />
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      searchTxt:'' // 收集文本框中的数据
    }
  },
  methods: {
    searchUsers(){
      const searchTxt= this.searchTxt.trim()
      this.$bus.$emit('search',searchTxt)
    }
  }
}
</script>
<style scoped>
</style>