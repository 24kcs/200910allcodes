<template>
  <div>
    <h2>About组件</h2>
    <input type="text" v-model="msg" />
  </div>
</template>
<script>
export default {
  name: 'About',
  props:['msg']
}
</script>
<style scoped>
</style>