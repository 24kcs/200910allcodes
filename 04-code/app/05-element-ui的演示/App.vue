<template>
  <div>
    <!-- <el-button type="success">华哥哥</el-button>
    <Button>哈哈</Button> -->

    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      value: true,
    }
  },
}
</script>
<style scoped>
</style>