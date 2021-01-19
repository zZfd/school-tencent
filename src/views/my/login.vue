<!--
 * @Author: zfd
 * @Date: 2020-11-11 16:29:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 10:54:59
 * @Description: 登录/注册页面
-->
<template>
  <div class="app-container my-container">
    <div class="my-avatar" :style="{backgroundImage:avatarUrl}" />
    <div class="my-form">
      <div class="my-item">
        <label>手机号</label>
        <input type="phone" name="phone" autocomplete="off" placeholder="请输入手机号">
      </div>
      <div v-show="pwdLogin" class="my-item">
        <label>密码</label>
        <input type="password" name="phone" autocomplete="off" placeholder="请输入密码">
      </div>
      <!-- <div class="my-divider" /> -->
      <div v-show="!pwdLogin" class="my-item">
        <label>验证码</label>
        <input type="text" name="code" autocomplete="off">
        <div class="my-veritify">
          <button v-show="!vertifyDisable" @click="getVertification">获取验证码</button>
          <span v-show="vertifyDisable" class="my-veritify-wait">{{ countDown }} s后重试</span>
        </div>
      </div>
      <div class="my-link" @click="pwdLogin = !pwdLogin">{{ pwdLogin === true ? '验证码登录' : '账户密码登录' }}</div>
      <button class="my-submit" @click="$router.push('/my-info')">登 录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My',
  components: {

  },
  data() {
    return {
      avatarUrl: require('@/assets/images/nologin.png'),
      isLogined: false,
      pwdLogin: false,
      userInfo: {
        phone: '13776050390',
        id: '2016339901241'
      },
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
$bk: #fff;
$inputHeight: 40px;
$blue: #3598FE;
.my-container {
  padding: 0 20px;
  padding-top: 80px;
}
button {
  border-radius: 5px;
  background: $blue;
  color: #fff;
  border: none;
}
.my-avatar {
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border: 4px solid white;
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.my-form {
  // width: 90%;
  // margin: 0 auto;
  margin-top: 30px;
  padding: 0 10px 10px;
  background: $bk;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  .my-divider {
    height: 2px;
    background: #E8E8E8;
  }
  .my-item {
    margin: 15px 0 20px 0;
    position: relative;
    display: flex;
    align-items: center;
    color: #898989;
    input {
      color: #333;
      border: none;
      border-bottom: 1px solid #333;
      width: 100%;
      height: $inputHeight;
      padding-left: 70px;
      &:focus {
        outline: none;
      }
    }
    label {
      position: absolute;
      left: 5px;
      font-weight: normal;
    }
    .my-veritify {
      margin-left: 10px;
      min-width: max-content;
      button {
        font-size: 14px;
        height: $inputHeight;
      }
    }
  }
  .my-link {
    display: block;
    font-size: 14px;
    color: #333;
  }
  .my-submit {
    display: block;
    margin: 30px auto;
    width: 100%;
    height: $inputHeight;
  }
}
</style>
