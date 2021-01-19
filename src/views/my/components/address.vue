<!--
 * @Author: zfd
 * @Date: 2020-11-16 14:31:50
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 13:45:20
 * @Description:
-->
<template>
  <div class="address-container">
    <div class="address-item">
      <p>社保编号</p>
      <input type="text" placeholder="请输入社保编号" autocomplete="off">
    </div>
    <div class="address-item">
      <p>现家庭地址</p>
      <input type="text" placeholder="请输入现家庭地址" autocomplete="off">
    </div>
    <div class="address-item">
      <p>就业单位</p>
      <input type="text" placeholder="请输入就业单位" autocomplete="off">
    </div>
  </div>

</template>

<script>

export default {
  name: 'ChangePhoto',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.address-container {
    padding: 20px 20px;

    .address-item {
          color: #323233;
          p{
            font-size: 14px;
            font-weight: bold;
            text-indent: 5px;
            letter-spacing: 2px;
          }
          input {
            color: #000;
            width: 100%;
            border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
            // border-bottom: 1px solid #e5e5e5;
            line-height: 40px;
            padding-left: 10px;
          }
  }
}

</style>
