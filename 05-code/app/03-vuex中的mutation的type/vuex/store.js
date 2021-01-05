// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入mutation的type
import {INCREMENT,DECREMENT} from './mutation-types'
// 声明使用Vuex
Vue.use(Vuex)
// 包含了多个状态数据的对象
const state = {
  count: 0
}
// 包含了多个直接修改状态数据的方法的对象(一般放同步)
// mutations对象中的每个方法都叫mutation
const mutations = {
  // mutations中的每个方法都是一个mutation,每个方法都有一个自己的type(类型),方法的名字就是这个方法的type,通常情况下,为了方便组件及action中调用某个mutation,会把mutation的type定义成一个常量
  // 加的状态改变
  // 如果函数的名字是动态的,那么可以使用[]的方式来进行包装
  [INCREMENT] (state) {
    state.count++
  },
  // 减的状态改变
  [DECREMENT] (state) {
    state.count--
  }

  // var obj ={
  //   "name":"小明"
  // }
  // obj.name
  // obj["name"]
}
// 包含了多个间接修改状态数据的方法的对象(一般放异步)
// actions对象中的每个方法都可以叫action
const actions = {
  // 将来在组件中,调用对应的action,action内部会通过commit找到对应的mutation,修改数据
  // 加的操作
  increment (context) {
    context.commit(INCREMENT)
  },
  // 减的操作
  decrement ({ commit }) {
    // context.commit('DECREMENT')
    commit(DECREMENT)
  },
  // 奇数的加操作
  incrementOdd ({ commit, state }) {
    if (state.count % 2 !== 0) {
      commit(INCREMENT)
    }
  },
  // 异步的加操作
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(INCREMENT)
    }, 1000);
  },
}
// 包含了多个状态数据的计算属性的get方法的对象
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
// 实例化Vuex.Store对象并暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})



// var obj = {
//   name:'小明',
//   age:20
// }

// var {age} = obj


// function ['ff'](){

// }