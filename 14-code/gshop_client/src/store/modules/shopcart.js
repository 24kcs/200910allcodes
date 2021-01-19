import { reqAddtoCart, reqGetShopCartList } from '@/api'
const state = {
  shopCartList: [] // 用来存储购物车中商品列表信息数据的数组
}
const mutations = {
  // 修改购物车列表数据
  RECEIVE_SHOP_CART_LIST (state, shopCartList) {
    state.shopCartList = shopCartList
  }
}
const actions = {
  // 添加购物车数据
  async addToCart ({ commit }, { skuId, skuNum }) {
    // 调用接口
    const result = await reqAddtoCart(skuId, skuNum)
    // 判断接口请求成功还是失败
    if (result.code !== 200) {
      throw new Error(result.message || '添加购物车失败了')
    }
  },
  // 查看购物车数据
  async getShopCartList ({ commit }) {
    const result = await reqGetShopCartList()
    if (result.code === 200) {
      commit('RECEIVE_SHOP_CART_LIST', result.data)
    }
  }
}
const getters = {
}
export default {
  state,
  mutations,
  actions,
  getters
}