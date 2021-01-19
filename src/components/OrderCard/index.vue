<!--
 * @Author: zfd
 * @Date: 2020-11-17 13:54:37
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-17 16:03:27
 * @Description:
-->
<template>
  <div class="order-card" @click="$router.push({name:'orderDetail',params:{isFinished}})">
    <p class="card-id">订单编号：{{ order.id }}</p>
    <ul>
      <li v-for="s in order.subjects" :key="s.title">
        {{ s.title }}
      </li>
    </ul>
    <p v-if="isFinished" class="card-amount">实付金额：<span>￥{{ order.amount }}</span></p>
    <template v-else>
      <p class="card-amount">应付金额：<span>￥{{ order.amount }}</span></p>
      <div class="card-btn">
        <button>立即支付</button>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true
    },
    isFinished: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
$grey:#898989;
$orange:#FD793F;
.order-card {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);

  .card-id {
    font-size: 14px;
    letter-spacing: 1px;
    color: $grey;
  }
  .card-amount{
    text-align: right;
    color: $grey;
    letter-spacing: 1px;
    line-height: 30px;
    span{
      font-size: 18px;
      color: $orange;
      font-weight: bold;
    }
  }
  .card-btn{
    text-align: right;
    button {
      border-radius: 30px;
      padding: 5px 10px;
      background:$orange;
      color: #fff;
      width: 90px;
      line-height: 25px;
      border: none;
    }
  }
}
</style>
