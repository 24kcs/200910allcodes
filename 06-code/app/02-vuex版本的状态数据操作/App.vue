<template>
  <div>
    <h2>次数:{{ $store.state.count }},奇数or偶数:{{ $store.getters.evenOrOdd }}</h2>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementOdd">incrementOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted () {
    // console.log(this)
  },
  methods: {
    // 加的操作
    increment() {
      // 直接找mutation来修改状态数据
      this.$store.commit('INCREMENT')
      // 找到的是action
      // this.$store.dispatch('increment')
    },
    // 减的操作
    decrement() {
      this.$store.commit('DECREMENT')
    },
    // 奇数的加操作
    incrementOdd() {
      // 直接找action
      this.$store.dispatch('incrementOdd')
    },
    // 异步的加操作
    incrementAsync() {
      // 直接找action
      this.$store.dispatch('incrementAsync')
    
    },
  },
}
</script>
<style scoped>
</style>