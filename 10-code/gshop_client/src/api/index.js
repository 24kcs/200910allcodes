// 封装api接口请求函数
// 引入axios
import ajax from './ajax'
// 获取首页三级分类信息的api接口函数
export const reqBaseCategoryList = ()=>ajax.get(`/product/getBaseCategoryList`)
// 获取首页的广告轮播图数据的api接口
export const reqBanners =()=>ajax.get('/cms/banner')