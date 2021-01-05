// 引入axios
import axios from 'axios'
// 引入mutation的type
import { REQUEST, REQUEST_SUCCESS, REQUEST_ERROR } from './mutation-types'
// 包含了多个间接修改状态数据的方法的对象
export default {
  // 异步操作的方法
  async search ({ commit }, searchName) {
    // 准备请求的api地址
    const url = `https://api.github.com/search/users`
    // 第一次修改状态数据
    commit(REQUEST)
    try {
      // 通过axios来发送请求
      const promise = await axios.get(url, {
        params: {
          q: searchName,
        },
      })
      // 获取用户信息数据
      const users = promise.data.items.map((item) => ({
        login: item.login,
        avatar_url: item.avatar_url,
        html_url: item.html_url,
      }))

      // 第二次修改状态数据
      commit(REQUEST_SUCCESS, users)

    } catch (error) {
      // 第三次修改状态数据
      commit(REQUEST_ERROR,error)
    }
  }
}
