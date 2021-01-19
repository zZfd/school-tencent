<!--
 * @Author: zfd
 * @Date: 2020-11-17 15:27:20
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 10:45:08
 * @Description:
-->
<template>
  <div class="order-create">
    <div class="o-c ">
      <span class="o-c-download">报名表</span>
      <h2 class="o-c-title">2021建科培训</h2>
      <p class="o-c-tip">课程时间：2020/11/18 - 2021/01/01 </p>
      <p class="o-c-bottom"><span class="o-c-tip">450课时</span><span class="o-c-amount">￥9980</span></p>
    </div>
    <!-- <checkbox-group v-model="result" class="o-c-ul">
      <checkbox name="a">

      </checkbox>
      <checkbox name="b">
        <div class="o-c">
          <h2 class="o-c-title">2021建科培训课程</h2>
          <p class="o-c-tip">课程时间：2020/11/18 - 2021/01/01 </p>
          <p class="o-c-bottom"><span class="o-c-tip">450课时</span><span class="o-c-amount">￥9980</span></p>
        </div>
      </checkbox>
    </checkbox-group> -->
    <submit-bar :price="998000" decimal-length="2" button-text="生成订单" button-color="#3598FE" @submit="onSubmit">
      <!-- <checkbox v-model="isAll">全选</checkbox> -->
    </submit-bar>
  </div>
</template>

<script>
import { SubmitBar } from 'vant'

export default {
  name: 'OrderDetail',
  components: {
    SubmitBar
  },
  data() {
    return {
      result: ['a', 'b'],
      isAll: false
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
    // $store.getters['common/dsds']
      this.$router.push('/order-sub/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #898989;
$orange: #fd793f;
$blue: #3598FE;

.order-create {
  padding: 20px 10px;
}
.o-c-ul {
  .van-checkbox {

  }
  ::v-deep .van-checkbox__label {
    flex: 1;
    padding-left: 10px;
  }
}

.o-c {
  position: relative;
  background: #fff;
    border-radius: 10px;
    padding: 10px 10px;
    box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
    margin-bottom: 15px;
    .o-c-download{
      position: absolute;
      right: 20px;
      top: 10px;
      color: $blue;
    }
  .o-c-title {
    // padding: 50px;
    padding-top: 10px;
    font-size: 18px;
  }
  .o-c-tip {
    // padding: 0 1em;
    font-size: 14px;
    color: $grey;
  }
  .o-c-bottom {
    // padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .o-c-amount {
      font-size: 18px;
      color: $orange;
    }
  }
}
</style>
