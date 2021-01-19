<!--
 * @Author: zfd
 * @Date: 2020-11-11 16:29:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 13:32:50
 * @Description: 个人信息页面
-->
<template>
  <div class="app-container basic-container">
    <van-cell-group @click="onClickInfo($event)">
      <van-cell title="姓名" name="name" :value="userInfo.name" />
      <van-cell title="性别" name="gender" :value="userInfo.gender" />
      <van-cell title="出生年月" name="age" :value="userInfo.age" />
      <van-cell title="民族" name="nation" :value="userInfo.nation" />
      <van-cell title="一寸照片" @click.stop="onClickCard" />

    </van-cell-group>
    <uploader ref="upload" v-model="fileList" class="photo-upload" :before-read="beforeRead" :after-read="afterRead" upload-icon="plus">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </uploader>
    <action-sheet v-model="popup.name" title="修改姓名" class="setting-name">
      <input type="text" name="updateName" autocomplete="off" placeholder="请输入姓名">
      <button @click="updateName">保存</button>
    </action-sheet>
    <action-sheet v-model="popup.other" :actions="popup.actions" cancel-text="取消" close-on-click-action @cancel="popup.other = false" @select="updateInfo" />
    <!-- <action-sheet v-model="popup.education" :actions="$store.state.common.educationMap" cancel-text="取消" close-on-click-action @cancel="popup.education = false" @select="changeGender" /> -->
    <van-popup v-model="popup.age" position="bottom">
      <datetime-picker type="year-month" title="选择出生年月" :min-date="minDate" :max-date="maxDate" :formatter="ymFormatter" @cancel="popup.age=false" @confirm="updateAge" />
    </van-popup>
  </div>
</template>

<script>
import { ActionSheet, DatetimePicker, Uploader } from 'vant'
import { parseTime } from '@/utils'
export default {
  name: 'My',
  components: {
    ActionSheet,
    DatetimePicker,
    Uploader
  },
  data() {
    return {
      show: false,
      userInfo: {
        name: '许王鹏',
        gender: '男',
        age: '1998年02月',
        nation: '民族'
      },
      fileList: [],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      popup: {
        name: false,
        age: false,
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
      const props = ['name', 'age', 'nation', 'gender']
      if (prop) {
        // attribute对象
        if (props.includes(prop.value)) {
          if (prop.value === 'name' || prop.value === 'age') {
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
    onClickCard() {
      this.$refs.upload.chooseFile()
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
    updateAge(value) {
      this.userInfo.age = parseTime(value, '{y}年{m}月')
      this.popup.age = false
    },
    updateName() {
      this.userInfo.name = document.querySelector("input[name='updateName']").value
      this.popup.name = false
    },
    // 返回 Promise
    async beforeRead(file, detail) {
      return new Promise((resolve, reject) => {
        if (!file.type.includes('image')) {
          this.$toast.fail({ message: '请上传照片格式', duration: 2000 })
          reject()
        } else {
          resolve(file)
        }
      })
    },
    afterRead(file, detail) {
      if (file.file.size > 1024 * 1024 * 2) {
        this.$toast.fail({ message: '照片大小应小于2M', duration: 2000 })
        this.fileList.pop()
      }
    },
    deleteUpload(file, detail) {
      console.log('delete')

      console.log(file)
      console.log(detail)
    }
  }
}
</script>
<style lang="scss" scoped>
$bk: #fff;
$inputHeight: 40px;
$blue: #3598FE;

.basic-container  {
      padding: 20px 0;

  .van-popup{
  max-height: 300px;

  }
    ::v-deep .van-uploader__wrapper {
    // margin: 0;
    margin-top: 30px;
    flex-direction: column;
    .van-uploader__preview-image,.van-uploader__upload {
      width: 130px;
      height: 130px;
          background: #fff;
          margin-bottom: 15px;
    }
    .van-uploader__upload-icon{
      font-size: 60px;
    }
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
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>
