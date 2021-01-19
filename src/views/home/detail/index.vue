<!--
 * @Author: zfd
 * @Date: 2020-11-17 15:27:20
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 09:37:12
 * @Description:
-->
<template>
  <div class="s-d-container">
    <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
    </swipe>
    <div class="s-d-brief" @click="$router.push('/subject/detail')">
      <h2 class="s-d-title">{{ subject.title }}</h2>
      <p class="s-d-tip">课程时间：{{ subject.time }} </p>
      <p class="s-d-bottom"><span class="s-d-tip">{{ subject.hours }}</span><span class="s-d-amount">￥{{ subject.amount }}</span></p>
    </div>
    <tabs v-model="active" animated swipeable color="#3598FE">
      <tab title="课程介绍">
        课程介绍
      </tab>
      <tab title="课时安排">
        课时安排
      </tab>
      <tab title="配套资料">
        配套资料
      </tab>
      <tab title="联系方式">
        联系方式
      </tab>
    </tabs>
    <div v-if="buyIt" class="s-d-purchase">
      <div class="s-d-p-l">
        <div class="s-d-p-m">￥2940</div>
        <div class="s-d-p-c">1191人报名</div>
      </div>
      <button class="s-d-p-r" @click="$router.push('/subject/report')">立即报名</button>
    </div>
  </div>

</template>

<script>
import { Swipe, SwipeItem, Tab, Tabs } from 'vant'

export default {
  name: 'OrderDetail',
  components: {
    Swipe, SwipeItem, Tab, Tabs
  },
  data() {
    return {
      result: ['a', 'b'],
      isAll: false,
      active: 1,
      subject: {
        title: '2021建科培训课程',
        time: '2020/11/18 - 2021/01/01',
        hours: '450课时',
        amount: 9980
      },
      buyIt: true
      // order: {
      //   id: 1,
      //   subjects: [{ title: '2022建科培训你机构' }],
      //   amount: 6450,
      //   isFinished: false,
      //   type: '普通订单',
      //   orderTime: '2020-11-16 17:07:28',
      //   remarks: '备注信息'
      // },

    }
  },
  methods: {
    onSubmit() {

    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.buyIt === false) {
        vm.buyIt = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$grey: #898989;
$orange: #fd793f;
$bk: #fff;
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
.s-d-brief {
  background:$bk;
  // border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 20px;
  // box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
  // margin: 15px;
  .s-d-title {
    font-size: 18px;
  }
  .s-d-tip {
    // padding: 0 1em;
    font-size: 14px;
    color: $grey;
  }
  .s-d-bottom {
    // padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .s-d-amount {
      font-size: 18px;
      color: $orange;
    }
  }
}
.s-d-purchase {
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  background: $bk;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
  .s-d-p-m{
    color: $orange;
    font: 18px bold;
  }
  .s-d-p-c{
    color: $grey;
    font-size: 14px;
    text-indent: .5em;
  }
  .s-d-p-r{
     border-radius: 30px;
      padding: 5px 10px;
      border: none;
 background: $orange;
  color: #fff;
  width: 90px;
  line-height: 25px;
  }
}

</style>
