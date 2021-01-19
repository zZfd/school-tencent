<!--
 * @Author: zfd
 * @Date: 2020-11-11 16:29:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 10:47:53
 * @Description: 个人信息页面
-->
<template>
  <div class="app-container setting-container">
    <van-cell style="margin:20px 0" title="手机" is-link value="13776050390" to="/change/phone" />
    <!-- <van-cell-group :border="false" @click="onClickInfo($event)"> -->
    <van-cell title="姓名" name="name" :value="userInfo.name" is-link to="/change/basic" />
    <van-cell title="培训类别" name="training" :value="userInfo.training" @click="onClickTrain" />
    <!-- <van-cell title="性别" name="gender" :value="userInfo.gender" /> -->
    <!-- <van-cell title="出生年月" name="age" :value="userInfo.age" /> -->
    <!-- <div class="setting-education"> -->
    <van-cell title="文化程度" name="education" :value="userInfo.education" is-link to="/change/education" />

    <!-- </div> -->
    <!-- </van-cell-group> -->
    <van-cell title="身份证" is-link to="/change/idcard" />
    <van-cell title="地址" is-link to="/change/address" />

    <van-cell style="margin:20px 0" title="修改密码" is-link to="/change/password" />
    <div class="login-out" @click="clickLogOut">登出</div>
    <!-- <action-sheet v-model="popup.name" title="修改姓名" class="setting-name">
      <input type="text" name="updateName" autocomplete="false" placeholder="请输入姓名">
      <button @click="updateName">保存</button>
    </action-sheet> -->
    <action-sheet v-model="popup.training" :actions="popup.actions" cancel-text="取消" close-on-click-action @cancel="popup.training = false" @select="updateInfo" />
    <!-- <action-sheet v-model="popup.education" :actions="$store.state.common.educationMap" cancel-text="取消" close-on-click-action @cancel="popup.education = false" @select="changeGender" /> -->
    <!-- <van-popup v-model="popup.age" position="bottom">
      <datetime-picker type="year-month" title="选择出生年月" :min-date="minDate" :max-date="maxDate" :formatter="ageFormatter" @cancel="popup.age=false" @confirm="updateAge" />
    </van-popup> -->
  </div>
</template>

<script>
import { ActionSheet } from 'vant'
import { parseTime } from '@/utils'
export default {
  name: 'My',
  components: {
    ActionSheet

  },
  data() {
    return {
      show: false,
      userInfo: {
        name: '许王鹏',
        gender: '男',
        age: '1998年02月',
        education: '本科',
        training: '免费职业培训'
      },
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      popup: {
        training: false,
        actions: []
      }
    }
  },
  methods: {
    // 修改点击事件
    onClickTrain(event) {
      this.popup.training = true
      this.popup.actions = this.$store.state.common.trainingMap

      // this.show = true
    },
    // 更新用户信息
    updateInfo(action, index) {
      this.userInfo.training = action.name
    },
    ageFormatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    },
    updateAge(value) {
      this.userInfo.age = parseTime(value, '{y}年{m}月')
      this.popup.age = false
    },
    updateName() {
      this.userInfo.name = document.querySelector("input[name='updateName']").value
      this.popup.name = false
    },
    async clickLogOut() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss" scoped>
$bk: #fff;
$inputHeight: 40px;
$blue: #3598FE;

.setting-container .van-popup {
  max-height: 300px;
}
.login-out {
  background: $bk;
  color: red;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  letter-spacing: 0.2em;
}
.setting-name {
  padding: 0 20px;
  input {
    margin: 30px 0 0;
    width: 100%;
    color: #333;
    border: none;
    border-bottom: 1px solid #333;
    height: 40px;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
  button {
    display: block;
        width: 100%;

    margin: 30px 0;
    height: 38px;
    letter-spacing: 1em;
    background: #40A9FC;
    border-radius: 8px;
    color: #fff;
    border: none;
  }
}
.setting-education {
  position: relative;
  &::after{
      position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0.42667rem;
    bottom: 0;
    left: 0.42667rem;
    border-bottom: 0.02667rem solid #ebedf0 !important;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

}
</style>
