<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav />

    <!--列表-->
    <ListContainer />

    <!--今日推荐-->
    <TodayRecommend />

    <!-- 商品排行 -->
    <Rank />

    <!-- 猜你喜欢 -->
    <Like />

    <!--楼层-->
    <Floor />
    <!--楼层-->
    <Floor />

    <!--商标-->
    <Brand />
  </div>
</template>
<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>