<!--
 * @Author: zfd
 * @Date: 2020-11-11 16:29:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 14:59:40
 * @Description: 个人信息页面
-->
<template>
  <div class="app-container setting-container">
    <van-cell-group @click="onClickInfo($event)">
      <van-cell title="最高学历" name="education" :value="userInfo.education" />
      <van-cell title="毕业时间" name="graduateTime" :value="userInfo.graduateTime" />
      <van-cell title="证书" name="certificate" :value="userInfo.certificate" />
      <van-cell title="证书等级" name="rank" :value="userInfo.rank" />

    </van-cell-group>

    <action-sheet v-model="popup.other" :actions="popup.actions" cancel-text="取消" close-on-click-action @cancel="popup.other = false" @select="updateInfo" />
    <!-- <action-sheet v-model="popup.education" :actions="$store.state.common.educationMap" cancel-text="取消" close-on-click-action @cancel="popup.education = false" @select="changeGender" /> -->
    <van-popup v-model="popup.graduateTime" position="bottom">
      <datetime-picker type="year-month" title="选择毕业时间" :min-date="minDate" :max-date="maxDate" :formatter="ymFormatter" @cancel="popup.age=false" @confirm="updateGraduateTime" />
    </van-popup>
  </div>
</template>

<script>
import { ActionSheet, DatetimePicker } from 'vant'
import { parseTime } from '@/utils'
export default {
  name: 'My',
  components: {
    ActionSheet,
    DatetimePicker
  },
  data() {
    return {
      show: false,
      userInfo: {
        graduateTime: '1998年02月',
        education: '本科',
        certificate: '职业资格证书',
        rank: '甲级'
      },
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      popup: {
        name: false,
        graduateTime: false,
        other: false,
        actions: [],
        target: ''
      }
    }
  },
  methods: {
    // 修改点击事件
    onClickInfo(event) {
      const prop = event.target.parentNode.attributes.name || event.target.parentNode.parentNode.attributes.name
      const props = ['graduateTime', 'education', 'certificate', 'rank']
      if (prop) {
        // attribute对象
        if (props.includes(prop.value)) {
          if (prop.value === 'graduateTime') {
            this.popup[prop.value] = true
          } else {
            this.popup.other = true
            this.popup.actions = this.$store.state.common[`${prop.value}Map`]
          }
          this.popup.target = prop.value
        }
      }
      // this.show = true
    },
    // 更新用户信息
    updateInfo(action, index) {
      this.userInfo[this.popup.target] = action.name
    },
    ymFormatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    },
    updateGraduateTime(value) {
      this.userInfo.graduateTime = parseTime(value, '{y}年{m}月')
      this.popup.graduateTime = false
    }
  }
}
</script>
<style lang="scss" scoped>
$bk: #fff;
$inputHeight: 40px;
$blue: #3598FE;

.setting-container  {
        padding: 20px 0;
.van-popup{
  max-height: 300px;
}
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
