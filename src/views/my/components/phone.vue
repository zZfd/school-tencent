<!--
 * @Author: zfd
 * @Date: 2020-11-16 14:31:04
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 14:16:13
 * @Description:
-->
<template>
  <div class="phone-container">
    <div class="phone-old">
      <p>当前绑定手机号</p>
      <p>159 **** 0323</p>
    </div>
    <div class="phone-item">
      <van-icon name="phone-circle-o" class="app-icon" />
      <span class="phone-item-line" />
      <input type="phone" name="phone" autocomplete="off" placeholder="请输入新手机号">
    </div>
    <div class="phone-item">
      <van-icon name="comment-circle-o" class="app-icon" />
      <span class="phone-item-line" />

      <input type="text" name="code" autocomplete="off" class="phone-code-input">
      <div class="my-veritify">
        <button v-show="!vertifyDisable" @click="getVertification">获取验证码</button>
        <span v-show="vertifyDisable" class="my-veritify-wait">{{ countDown }} s后重试</span>
      </div>
    </div>
    <button class="phone-submit">确定更改手机号码</button>
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

.phone-container {
  .phone-icon{
    font-size: 30px;
  }
  padding: 60px 30px;
  align-items: center;
  .phone-old p:nth-of-type(1) {
    text-align: center;
    font-size: 14px;
    color: #989898;
  }
  .phone-old p:nth-of-type(2) {
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 50px;
    font-size: 18px;
    color: #6B6B6B;
  }
  .phone-item {
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
    .phone-item-line {
      position: absolute;
      left: 50px;
      background: #eee;
      width: 1px;
      line-height: $inputHeight;
      height: 30px;
    }
    input {
      color: #000;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
      width: 100%;
      height: 100%;
      padding: 0 10px 0 70px;

    }
    .phone-code-input {
      padding-right: 110px;
    }

    .my-veritify {
      position: absolute;

      right: 10px;

      min-width: max-content;
      button {
        letter-spacing: 2px;
        border: 1px solid $blue;
        color: $blue;
        border-radius: 5px;
        background: #fff;
        font-size: 14px;
        height: 25px;
      }
    }
  }
  .phone-submit {
    display: block;
    letter-spacing: 2px;
    margin: 30px auto;
    width: 100%;
    color: #fff;
    border: none;
    border-radius: 5px;
    background: $blue;
    height: $inputHeight;
  }
}
</style>
