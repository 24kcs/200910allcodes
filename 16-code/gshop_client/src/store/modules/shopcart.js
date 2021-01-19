import { reqAddtoCart, reqGetShopCartList,reqChangeCheckCartItem,reqChangeCheckCartItems,reqDeleteCartItem,reqDeleteCartItems } from '@/api'
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
  },
  // 修改购物项的选中状态
  async changeCheckCartItem({commit,dispatch},{skuId, isChecked}){
    const result = reqChangeCheckCartItem(skuId, isChecked)
    // 判断是否修改成功
    if(result.code!==200){
      // 抛出去一个错误信息
      throw new Error(result.message||'修改状态失败')
    }else{
      // 修改状态成功了,需要刷新页面
      dispatch('getShopCartList')
    }
  },
  // 批量修改购物项的选中状态
  async changeCheckCartItems({state,dispatch},isCheck){
    // const isChecked = isCheck===1?0:1
    const isChecked = isCheck?0:1
   
    // 存储的是所有选中的购物项的skuId数据
    const skuIdList = []
    // 遍历所有的购物项
    state.shopCartList.forEach(cartItem=>{
      cartItem.cartInfoList.forEach(item=>{
        // 判断
        if(item.isChecked!==isChecked){
          skuIdList.push(item.skuId)
        }
      })
    })

    const result = await reqChangeCheckCartItems(skuIdList, isChecked)
    if(result.code===200){
      dispatch('getShopCartList')
    }else{
      throw new Error(result.message||'批量修改购物项选中状态失败了')
    }
  },
  // 删除选中的购物项
  // 批量删除选中的购物项
}
const getters = {
  // 计算购物项的总数量
  // 计算购物项的总价格
  // 计算购物项是否全选的状态
}
export default {
  state,
  mutations,
  actions,
  getters
}