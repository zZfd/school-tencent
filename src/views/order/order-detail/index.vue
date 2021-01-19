<!--
 * @Author: zfd
 * @Date: 2020-11-17 15:27:20
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 10:50:18
 * @Description:
-->
<template>
  <div class="order-detail">
    <div v-if="!order.isFinished" class="o-d-s">
      <p>待支付</p>
      <span>请在2天23小时59分25秒内完成付款，过期订单自动取消</span>
    </div>
    <div v-else class="o-d-s">
      <p>支付已完成</p>
    </div>
    <div class="order-detail-m">
      <div class="o-d-c">
        <span class="o-d-download">报名表</span>
        <!-- <p class="card-id">订单编号：{{ order.id }}</p> -->
        <p v-for="s in order.subjects" :key="s.title">
          {{ s.title }}
        </p>
        <p class="o-d-amount"><span>{{ order.isFinished ? '实付总额：' : '应付总额：' }}</span><span>￥{{ order.amount }}</span></p>

      </div>
      <div class="o-d-c">
        <p>订单编号：{{ order.id }}</p>
        <p>订单类型：{{ order.type }}</p>
        <p>下单时间：{{ order.orderTime }}</p>
        <p v-if="order.payTime">完成时间：{{ order.payTime }}</p>

      </div>
      <div class="o-d-c"><p>{{ order.remarks }}</p></div>
      <div v-if="!order.isFinished" class="o-d-btn">
        <button @click.prevent="show = true">取消订单</button>

        <button>立即支付</button>

      </div>
    </div>
    <action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      description="请选择取消订单的原因"
      close-on-click-action
    />
  </div>
</template>

<script>
import { ActionSheet } from 'vant'

export default {
  name: 'OrderDetail',
  components: {
    ActionSheet
  },
  data() {
    return {
      order: {
        id: 1,
        subjects: [{ title: '2022建科培训你机构' }],
        amount: 6450,
        isFinished: false,
        type: '普通订单',
        orderTime: '2020-11-16 17:07:28',
        remarks: '备注信息'
      },
      show: false,
      actions: [
        { name: '我不想买了' },
        { name: '买错课程了' },
        { name: '价格太贵' },
        { name: '其他' }

      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const isFinished = to.params.isFinished
      if (typeof isFinished === 'boolean') {
        vm.order.isFinished = isFinished
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$grey: #898989;
$orange: #FD793F;
$blue:#3598FE;
  .o-d-s{
          letter-spacing: 1px;
          padding: 0 10px 20px;
          margin-bottom: 30px;
    background: $blue ;
    color: #fff;
    p{
      margin: 0;
    }
    p:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
        line-height: 60px;
      }
      p:nth-of-type(2) {
        font-size: 14px;
      }
  }
.order-detail-m {
      letter-spacing: 1px;

  padding: 0 10px;

  .o-d-c {
    position: relative;
    margin: 10px 0;
    color: $grey;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
    .o-d-download{
      position: absolute;
      right: 20px;
      top: 10px;
      color: $blue;
    }
  }
  p {

    font-weight: bold;
    color: #000;
  }
  .o-d-amount {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    span:nth-of-type(1) {
      color: #000;
      font-size: 14px;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      color: $orange;
    }
  }

  .o-d-btn {
    // position: fixed;
    // bottom: 40px;
    // right: 10px;
    padding: 0 10px;
    text-align: right;
     margin-top: 40px;
    button {
      border-radius: 30px;
      padding: 5px 10px;
      border: none;
    }
    button:nth-of-type(1) {
      background: #fff;
      color: #000;
      border: 1px solid #C8C8C8;
      width: 90px;
      line-height: 20px;
      margin-right: 15px;
    }
    button:nth-of-type(2) {
      background: $orange;
      color: #fff;
      width: 90px;
      line-height: 25px;
    }
  }
}
</style>
