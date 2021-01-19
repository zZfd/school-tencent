<!--
 * @Author: zfd
 * @Date: 2020-11-16 14:31:50
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 14:58:05
 * @Description:
-->
<template>
  <div class="idcard-container">
    <!-- <uploader v-model="fileList" multiple /> -->
    <!-- :before-read="beforeRead" :after-read="afterRead" :before-delete="deleteUpload" -->
    <!-- <div class="idcard-basic">
      <p>身份证号</p>
      <input type="text" placeholder="请输入身份证号码">
    </div> -->
    <van-cell-group @click="onClickInfo($event)">
      <van-cell title="身份证号码" name="idcard" :value="userInfo.idcard" />
      <van-cell title="户籍所在地" name="address" :value="userInfo.address" />
      <van-cell title="身份证正反照" @click.stop="onClickCard" />
    </van-cell-group>
    <action-sheet v-model="popup.idcard" title="修改身份证号" class="setting-name">
      <input type="text" name="idcard" autocomplete="false" placeholder="请输入姓名">
      <button @click="updateIdcard">保存</button>
    </action-sheet>
    <van-popup v-model="popup.address" position="bottom">
      <van-area title="户籍" :area-list="areaList" @confirm="confirmAddress" @cancel="popup.address = false" />
    </van-popup>
    <uploader ref="upload" v-model="fileList" class="idcard-upload" :before-read="beforeRead" :after-read="afterRead" upload-icon="plus">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </uploader>
  </div>

</template>

<script>
import { ActionSheet, Uploader, Area } from 'vant'
import areaList from '@/utils/area'
export default {
  name: 'ChangeIdcard',
  components: {
    Uploader,
    ActionSheet,
    VanArea: Area
  },
  data() {
    return {
      userInfo: {
        idcard: '321323********4916',
        address: ''
      },
      fileList: [],
      areaList,
      popup: {
        name: false,
        address: false,
        idcard: false,
        actions: [],
        target: ''
      }
      // { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: 'leaf' },
      // // Uploader 根据文件后缀来判断是否为图片文件
      // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      // { url: 'https://cloud-image', name: 'cloud', isImage: true }]
    }
  },
  methods: {
    updateIdcard() {
      this.userInfo.idcard = document.querySelector("input[name='idcard']").value
      this.popup.idcard = false
    },
    onClickCard() {
      this.$refs.upload.chooseFile()
    },
    // 修改点击事件
    onClickInfo(event) {
      const prop = event.target.parentNode.attributes.name || event.target.parentNode.parentNode.attributes.name
      const props = ['idcard', 'address']
      if (prop) {
        // attribute对象
        if (props.includes(prop.value)) {
          this.popup[prop.value] = true
        }
      }
      // this.show = true
    },
    confirmAddress(address) {
      this.userInfo.address = address.map(v => v.name).join('/')
      this.popup.address = false
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
.idcard-container {
  padding: 20px 0;
  .idcard-basic {
          color: #8B8B8B;
          p{
            text-indent: 5px;
            letter-spacing: 2px;
          }
          input {
            color: #333;
            width: 100%;
            border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
            // border-bottom: 1px solid #e5e5e5;
            line-height: 40px;
            padding-left: 10px;
          }
  }
  ::v-deep .van-uploader__wrapper {
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
  // ::v-deep .van-uploader__upload {
  // }
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
