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

// 根据skuId获取当前产品的详情信息接口
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)
// 根据skuId获取当前产品的优惠券和活动券的接口
export const reqCouponActivityList = (skuId) => ajax.get(`/activity/findActivityAndCoupon/${skuId}`)
// 根据优惠券的id来领取优惠券的接口
export const reqGetCouponInfo =(couponId)=>ajax.get(`/activity/auth/getCouponInfo/${couponId}`)