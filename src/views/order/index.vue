<!--
 * @Author: zfd
 * @Date: 2020-11-17 13:54:37
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-17 15:24:33
 * @Description:
-->
<template>
  <div class="order-container">
    <tabs v-model="active" sticky animated swipeable color="#3598FE">
      <tab title="待付款">
        <div class="order-tab-c">
          <order-card v-for="order in lists" :key="order.id" :order="order" :is-finished="false" />
        </div>
      </tab>
      <tab title="已付款">
        <div class="order-tab-c">
          <order-card v-for="order in lists" :key="order.id" :order="order" />
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import OrderCard from '@/components/OrderCard'
export default {
  name: 'Order',
  components: {
    Tab, Tabs, OrderCard
  },
  data() {
    return {
      active: 0,
      lists: [
        { id: 1, amount: 6450, subjects: [{ title: '2022年建科培训课程的' }] }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.order-container {
  ::v-deep .van-tab--active {
    font-weight: 800;
  }
  ::v-deep .van-tab {
    letter-spacing: 1px;
  }
}
.order-tab-c {
  padding: 10px;
}
</style>
