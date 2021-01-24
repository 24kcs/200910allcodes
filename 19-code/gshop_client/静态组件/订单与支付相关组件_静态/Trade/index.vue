<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div class="address clearFix">
        <span class="username selected">张三</span>
        <p>
          <span class="s1">北京市昌平区宏福科技园综合楼6层</span>
          <span class="s2">15010658793</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="address clearFix">
        <span class="username selected">李四</span>
        <p>
          <span class="s1">北京市昌平区宏福科技园综合楼6层</span>
          <span class="s2">13590909098</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="address clearFix">
        <span class="username selected">王五</span>
        <p>
          <span class="s1">北京市昌平区宏福科技园综合楼6层</span>
          <span class="s2">18012340987</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul class="list clearFix">
          <li>
            <img src="./images/goods.png" alt="" />
          </li>
          <li class="activity">
            <div class="goods-suit-tit">
              <strong>满100元,减20元</strong>
              <span class="ml20">
                &nbsp;返现：
                <em>20元</em>
              </span>
              <strong>满18件打8折</strong>
              <span class="ml20">
                &nbsp;打折：
                <em>8折</em>
              </span>
            </div>
            <p>小米手机</p>
            <h4>7天无理由退货</h4>
          </li>

          <li>
            <h3>￥5399.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul>
        <ul class="list clearFix">
          <li>
            <img src="./images/goods.png" alt="" />
          </li>
          <li>
            <p>
              Apple iPhone 6s (A1700) 64G 玫瑰金色
              移动联通电信4G手机硅胶透明防摔软壳 本色系列
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥5399.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
        ></textarea>
      </div>
      <div class="line"></div>
      <!-- 发票信息区域 -->
      <div class="linkInfo">
        <div class="step-tit">
          <h5>发票信息</h5>
        </div>
        <div class="step-cont">
          <span>普通发票（电子）</span>
          <span>个人</span>
          <span>明细</span>
        </div>
      </div>
      <!-- 优惠券选择区域 -->
      <div class="cardInfo">
        <div class="step-tit">
          <h5>使用优惠/抵用</h5>
          <div class="coupon-enable">
            <div class="c-detail item-selected">
              <div class="c-msg c-dong c-nopointer">
                <div class="c-top-dong"></div>
                <div class="c-price">
                  <em>50元</em>
                  <!-- <em>8折</em>
                  <em>67元</em>
                  <em>9折</em> -->
                </div>
                <div class="c-limit">
                  <span> 现金券</span>
                  <!-- <span>折扣券</span>
                  <span> 67元</span>
                  <span>32件</span> -->
                </div>
                <div class="c-time c-time-dong">
                  <span>有效期至2021-2-11</span>
                </div>
              </div>
              <div class="c-type c-type-dong">
                <span class="c-type-l">[东券]</span>
                <span class="c-type-r">[限品类]</span>
              </div>
            </div>
            <div class="c-detail item-selected">
              <div class="c-msg c-dong c-nopointer">
                <div class="c-top-dong"></div>
                <div class="c-price">
                  <!-- <em>50元</em>
                  <em>8折</em>
                  <em>67元</em> -->
                  <em>9折</em>
                </div>
                <div class="c-limit">
                  <!-- <span> 现金券</span>
                  <span>折扣券</span>
                  <span> 67元</span> -->
                  <span>32件</span>
                </div>
                <div class="c-time c-time-dong">
                  <span>有效期至2021-2-11</span>
                </div>
              </div>
              <div class="c-type c-type-dong">
                <span class="c-type-l">[东券]</span>
                <span class="c-type-r">[限品类]</span>
              </div>
            </div>
            <div class="c-detail item-selected">
              <div class="c-msg c-dong c-nopointer">
                <div class="c-top-dong"></div>
                <div class="c-price">
                  <!-- <em>50元</em>
                  <em>8折</em> -->
                  <em>67元</em>
                  <!-- <em>9折</em> -->
                </div>
                <div class="c-limit">
                  <!-- <span> 现金券</span>
                  <span>折扣券</span> -->
                  <span> 67元</span>
                  <!-- <span>32件</span> -->
                </div>
                <div class="c-time c-time-dong">
                  <span>有效期至2021-2-11</span>
                </div>
              </div>
              <div class="c-type c-type-dong">
                <span class="c-type-l">[东券]</span>
                <span class="c-type-r">[限品类]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单优惠信息区域 -->
    <div class="order-summary">
      <div class="static fr">
        <div class="list">
          <span><i class="number">5</i>件商品，总商品金额</span>
          <em class="allprice">¥23233元</em>
        </div>
        <div class="list">
          <span>运费：</span>
          <em class="transport">¥5元</em>
        </div>
        <div class="list">
          <span>返现：</span>
          <em class="money">¥40元</em>
        </div>
        <div class="list">
          <span>优惠券：</span>
          <em class="transport">¥50元</em>
        </div>
      </div>
    </div>
    <div class="trade">
      <div class="price">应付金额:　<span>¥5399.00</span></div>
      <div class="receiveInfo">
        寄送至:
        <span>北京市昌平区宏福科技园综合楼6层</span>
        收货人：<span>张三</span>
        <span>15010658793</span>
      </div>
    </div>
    <div class="sub clearFix">
      <router-link class="subBtn" to="/pay">提交订单</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trade',
}
</script>
<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .receive {
      a {
        font-size: 12px;
        float: right;
        &:hover {
          color: #4cb9fc;
          text-decoration: underline;
        }
      }
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: '';
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;
      padding: 15px;
      background: #f4f4f4;
      margin: 5px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;
        background: #feedef;
        margin-bottom: 5px;
        .activity {
          width: 500px;
          strong {
            font-weight: bold;
          }
          .ml20 {
            margin-left: 20px;
            font-weight: 700;
            display: inline-block;
            border: 1px solid rgb(122, 189, 84);
            color: rgb(122, 189, 84);
            padding: 2px 5px;
          }
        }
        li {
          line-height: 30px;

          // p {
          //   margin-bottom: 20px;
          // }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .cardInfo {
      margin-bottom: 25px;
      .step-tit {
        line-height: 36px;
        margin: 15px 0;
        .coupon-enable {
          display: block;
          width: 920px;
          clear: both;
          margin-top: 10px;
          .c-detail {
            width: 200px;
            height: 120px;
            margin-left: 20px;
            display: inline-block;
            &.item-selected {
              border: 2px solid #e43a3d;
              background-image: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/coupon-selected.png);
              background-repeat: no-repeat;
              background-position: bottom right;
            }
            .c-nopointer {
              cursor: default !important;
              background-color: rgb(116, 210, 212);
              height: 85px;
              width: 100%;
              position: relative;
              border-left: 0;
              border-right: 0;
              .c-top-dong {
                height: 3px;
                width: 100%;
                background: #fff
                  url(https://misc.360buyimg.com/user/purchase/2.0.0/css/i/virtual-spite.png) -36px -6px
                  no-repeat;
              }
              .c-price {
                color: #fff;
                font: 24px Arial, Verdana, 'Microsoft YaHei', SimSun;
                display: inline;
                position: relative;
                top: 8px;
                margin-left: 12px;
                vertical-align: bottom;
                cursor: default !important;
              }
              .c-limit {
                color: #f5f5f5;
                font-size: 12px;
                display: inline;
                position: relative;
                top: 7px;
              }
              .c-time {
                padding-left: 12px;
                margin-top: 10px;
              }
            }
            .c-type {
              color: #74d2d4;
              border: 1px solid #cef0f1;
              width: 100%;
              box-sizing: border-box;
              .c-type-l {
                margin: 0 5px 0 12px;
              }
              .c-type-r {
                margin: 0;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  .order-summary {
    width: 1200px;
    overflow: hidden;
    padding-right: 20px;
    margin: 20px auto 0;
    .static {
      float: right;
      .list {
        line-height: 26px;
        span {
          float: left;
          width: 160px;
          .number {
            color: red;
          }
        }
        em {
          font-family: '微软雅黑';
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px '微软雅黑';
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>