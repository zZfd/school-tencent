<!--
 * @Author: zfd
 * @Date: 2020-11-18 10:02:15
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 10:47:45
 * @Description:
-->
<template>
  <div class="home-container">
    <div class="h-s-ul">
      <pull-refresh v-model="refreshLoading" success-text="刷新成功" @refresh="onRefresh">
        <div v-for="(item,index) in subjects" :key="index" class="h-s-item" @click="$router.push({name:'subjectDetail',params:{buyIt:false}})">
          <span class="h-s-download">报名表</span>
          <h2 class="h-s-title">{{ item.title }}</h2>
          <p class="h-s-tip">课程时间：{{ item.time }} </p>
          <p class="h-s-bottom"><span class="h-s-tip">{{ item.hours }}</span><span class="h-s-amount">￥{{ item.amount }}</span></p>
        </div>
      </pull-refresh>

    </div>
  </div>
</template>

<script>
import { PullRefresh } from 'vant'
import { debounce, getScroolTop } from '@/utils'
const data = {
  catgories: [
    {
      text: '艺术类',
      children: [
        {
          text: '茶艺师',
          id: 1
        },
        {
          text: '插花',
          id: 2
        },
        {
          text: '芳香保健师',
          id: 3
        },
        {
          text: '评茶员',
          id: 4
        }
      ]
    },
    {
      text: '建筑类',
      children: [
        {
          text: '监理员',
          id: 5
        },
        {
          text: '专业监理工程师',
          id: 6
        },
        {
          text: '见证取样员',
          id: 7
        }
      ]
    },
    {
      text: '见证取样员',
      children: [
        {
          text: '土建专业',
          id: 8
        },
        {
          text: '市政专业',
          id: 9
        }
      ]
    }
  ],
  active: false,
  activeId: 1, // 右侧
  activeIndex: 0, // 左侧
  popupSubject: false,
  timeUp: false,
  priceUp: false,
  refreshLoading: false,
  subjects: [
    {
      title: '2021建科培训课程',
      time: '2020/11/18 - 2021/01/01',
      hours: '450课时',
      amount: 9980
    },
    {
      title: '2021建科培训课程',
      time: '2020/11/18 - 2021/01/01',
      hours: '450课时',
      amount: 9980
    },
    {
      title: '2021建科培训课程',
      time: '2020/11/18 - 2021/01/01',
      hours: '450课时',
      amount: 9980
    },
    {
      title: '2021建科培训课程',
      time: '2020/11/18 - 2021/01/01',
      hours: '450课时',
      amount: 9980
    },
    {
      title: '2021建科培训课程',
      time: '2020/11/18 - 2021/01/01',
      hours: '450课时',
      amount: 9980
    }
  ]
}
export default {
  name: 'Home',
  components: {
    PullRefresh
  },
  data() {
    return data
  },
  computed: {
    currentSubject() {
      return this.catgories[this.activeIndex].text
    }
  },
  mounted() {
    window.onscroll = debounce(() => {
      if (document.documentElement.scrollHeight - document.body.clientHeight - getScroolTop() < 50) {
        console.log('到底了')
      }
    }, 100)
  },
  methods: {
    clickPopup() {
      this.active = !this.active
      this.popupSubject = !this.popupSubject
    },
    clickSort(option) {
      if (option === 'time') {
        this.timeUp = !this.timeUp
      } else if (option === 'price') {
        this.priceUp = !this.priceUp
      }
    },
    clickSubject(data) {
      console.log(data)
      this.popupSubject = false
    },
    onRefresh() {
      this.refreshLoading = true
      setTimeout(() => {
        this.refreshLoading = false
      }, 2000)
    }

  }
}
</script>

<style lang="scss" scoped>
$blue: #3598fe;
$grey: #898989;
$orange: #fd793f;

.home-container {
  position: relative;
  .h-nav-sticky{
    height: 50px;
  }
  .h-nav {
    position: fixed;
    width: 100%;
    top: 50px;
    // height: 50px;
    background: #fff;
    z-index: 1000;
  }
  .h-nav-i {
    position: relative;
    line-height: 50px;
    text-align: center;
    &::after {
      position: absolute;
      top: 50%;
      right: 10px;
      margin-top: -8px;
      border: 5px solid;
      border-color: transparent transparent #898989 #898989;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      opacity: 0.8;
      content: "";
    }
  }
  .h-nav-i--ative {
    &::after {
      margin-top: -1px;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }

  .h-s-item {
    position: relative;
    background: #fff;
    border-radius: 10px;
    padding: 5px 10px;
    box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
    margin: 15px;
    .h-s-download{
      position: absolute;
      right: 20px;
      top: 10px;
      color: $blue;
    }
    .h-s-title {
      font-size: 18px;
    }
    .h-s-tip {
      // padding: 0 1em;
      font-size: 14px;
      color: $grey;
    }
    .h-s-bottom {
      // padding: 0 10px;
      display: flex;
      justify-content: space-between;
      .h-s-amount {
        font-size: 18px;
        color: $orange;
      }
    }
  }
}
.van-tree-select__item--active {
  color: $blue;
}
.van-sidebar-item--select::before {
  background: $blue;
}
.home-popup-s {
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  z-index: 2025;
}
</style>
