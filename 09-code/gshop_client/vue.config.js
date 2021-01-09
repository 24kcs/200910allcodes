// vue.config.js
module.exports = {
  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: 'http://39.99.186.36', // 目标地址
        changeOrigin: true // 是否跨域
        // pathRewrite: {
        //   '^/api': '', // rewrite path
        // }
      }
    }
  }
}