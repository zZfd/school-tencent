<!--
 * @Author: zfd
 * @Date: 2020-11-16 14:31:04
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 13:38:12
 * @Description:
-->
<template>
  <div class="password-container">
    <div class="password-item">
      <van-icon name="info-o" class="app-icon" />
      <span class="password-item-line" />
      <input type="password" name="phone" autocomplete="false" placeholder="请设置新密码（6-12位数字与字母组合）">
    </div>
    <div class="password-item">
      <van-icon name="info-o" class="app-icon" />
      <span class="password-item-line" />
      <input type="password" name="phone" autocomplete="false" placeholder="再次输入新密码">
    </div>
    <button class="password-submit">完成</button>
  </div>
</template>
<script>
export default {
  name: 'ChangePhone',
  data() {
    return {
      pwdLogin: false,
      vertifyDisable: false,
      countDown: 60
    }
  },
  methods: {
    getVertification() {

    }
  }
}
</script>
<style lang="scss" scoped>
$inputHeight: 55px;
$blue: #3598FE;

.password-container {
  padding: 60px 30px;
  align-items: center;
  .password-item {
    position: relative;
    display: flex;
    align-items: center;
    color: #C7C7C7;
    height: $inputHeight;
    margin-bottom: 30px;
    // overflow: hidden;
    width: 100%;

    i {
      position: absolute;
      line-height: $inputHeight;
      // width: 30px;
      // height: 30px;
      left: 10px;
    }
    .password-item-line {
      position: absolute;
      left: 50px;
      background: #eee;
      width: 1px;
      line-height: $inputHeight;
      height: 30px;
    }
    input {
      color: #000;
      font-size: 14px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
      width: 100%;
      height: 100%;
      padding: 0 10px 0 60px;
    }

  }
  .password-submit {
    display: block;
    letter-spacing: 2px;
    margin: 50px auto;
    width: 100%;
    color: #fff;
    border: none;
    border-radius: 5px;
    background: $blue;
    height: 48px;
  }
}
</style>
