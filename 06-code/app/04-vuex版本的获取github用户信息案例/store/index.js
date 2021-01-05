// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 声明使用Vuex
Vue.use(Vuex)
// 实例化Vuex的store并暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})