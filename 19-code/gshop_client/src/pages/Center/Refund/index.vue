<template>
  <div>
    <div class="yui3-u-5-6">
      <div class="body userAddress">
        <div class="address-title">
          <span class="title">申请售后</span>
          <span class="clearfix"></span>
        </div>

        <div class="address-detail">
          <table class="sui-table table-bordered">
            <thead>
              <tr>
                <th>商品</th>
                <th>商品名称</th>
                <th>购买数量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="./images/itemlike01.png" style="width: 80px" />
                </td>
                <td>小米手机</td>
                <td>5个</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="modal-dialog"
          style="border: 1px #ededed solid; padding: 10px 10px"
        >
          <div class="modal-content">
            <div class="modal-body">
              <form action="" class="sui-form form-horizontal">
                <div class="control-group">
                  <label class="control-label">服务类型：</label>
                  <div class="controls" style="line-height: 28px">退款</div>
                </div>
                <div class="control-group">
                  <label class="control-label">退款方式：</label>
                  <div class="controls" style="line-height: 28px">
                    原支付方式返回
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">退款金额：</label>
                  <div class="controls" style="line-height: 28px">
                    <input type="text" class="input-medium" value="20" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">提交数量：</label>
                  <div class="controls" style="line-height: 28px">5</div>
                </div>
                <div class="control-group">
                  <label class="control-label">提交原因：</label>
                  <div class="controls">
                    <select style="padding-right: 0px; max-width: 450px">
                      <option value="R_1301">商品损坏</option>
                      <option value="R_1302">商品描述与实际描述不一致</option>
                      <option value="R_1303">缺货</option>
                      <option value="R_1304">号码不合适</option>
                      <option value="R_1305">拍错</option>
                      <option value="R_1306">不想买了</option>
                      <option value="R_1307">其他</option>
                    </select>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">问题描述：</label>
                  <div class="controls">
                    <textarea
                      id="inputComment"
                      placeholder="商品是否给力？快分享你的购物心得吧~"
                      maxlength="500"
                      style="width: 500px; height: 80px"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="submit">
              <button class="sui-btn btn-danger btn-submit">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Refund',
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.userAddress {
  padding: 0 25px;
  color: #555;
  .address-title {
    padding: 5px 10px;
    margin-bottom: 15px;
    line-height: 32px;
    background-color: #f1f1f1;
    .title {
      line-height: 40px;
      font-size: 15px;
      font-weight: 700;
    }
    .add-new {
      float: right;
      line-height: 24px;
      margin: 5px 0;
    }
  }
  .address-detail {
    width: 100%;
    .sui-table.table-bordered {
      width: 100%;
      border: 1px solid #e6e6e6;
      border-collapse: separate;
      border-left: 0;
      border-radius: 2px;
      th {
        background-color: #f4f4f4;
        border-left: 1px solid #e6e6e6;
      }
      td {
        border-left: 1px solid #e6e6e6;
      }
      thead th {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .modal-content {
    .modal-body {
      .control-group {
        margin-bottom: 18px;
        display: flex;
        /*height: 28px;*/
        line-height: 28px;
      }
    }
    .submit {
      text-align: center;
      .btn-submit {
        width: 220px;
        height: 48px;
        line-height: 48px;
        margin-right: 10px;
        padding: 0;
        font-family: 'Microsoft YaHei';
        font-size: 18px;
        color: #fff;
        background-color: #ea4a36;
        border: 1px solid #e8351f;
      }
    }
  }
}
</style>
