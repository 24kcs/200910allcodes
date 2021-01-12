// 封装api接口请求函数
// 引入axios
import ajax from './ajax'
import ajaxMock from './ajaxMock'
// 获取首页三级分类信息的api接口函数
export const reqBaseCategoryList = () => ajax.get(`/product/getBaseCategoryList`)
// 获取首页的广告轮播图数据的api接口
export const reqBanners = () => ajax.get('/cms/banner')

// 获取今日推荐的数据的接口---mockjs的方式来获取数据
export const reqRecommends = () => ajaxMock.get('/recommends')
// 获取楼层的数据的接口---mockjs的方式来获取数据
export const reqFloors = () => ajaxMock.get('/floors')
// 获取商品信息对象的api接口
export const reqProductList = (searchParams) => ajax.post('/list', searchParams)