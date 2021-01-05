<template>
  <div>
    <h2>次数:{{ count }},奇数or偶数:{{ evenOrOdd }}</h2>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementOdd">incrementOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
// 引入vuex中的辅助函数,辅助函数主要是在组件中使用的
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import {INCREMENT,DECREMENT} from './vuex/mutation-types'
export default {
  name: 'App',
  // 计算属性
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // },

    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
    
  },
  mounted () {
    // console.log(this)
  },
  methods: {
    // 加的操作
    // increment() {
    //   // 直接找mutation来修改状态数据
    //   this.$store.commit('INCREMENT')
    //   // 找到的是action
    //   // this.$store.dispatch('increment')
    // },
    // // 减的操作
    // decrement() {
    //   this.$store.commit('DECREMENT')
    // },
    ...mapMutations({increment:INCREMENT,decrement:DECREMENT}),
    ...mapActions(['incrementOdd','incrementAsync'])
    // 奇数的加操作
    // incrementOdd() {
    //   // 直接找action
    //   this.$store.dispatch('incrementOdd')
    // },
    // // 异步的加操作
    // incrementAsync() {
    //   // 直接找action
    //   this.$store.dispatch('incrementAsync')
    
    // },
  },
}



// var arr1 = [10,20,30]
// var arr2 =[...arr1]
// console.log(arr2)
// var obj = {
//   sayHi(){
//     console.log('真好啊')
//   }
// }
// var ff = ...obj


// function f1(...args){
//   console.log(args)
// }
// f1(1,2,3,4,56)
</script>
<style scoped>
</style>