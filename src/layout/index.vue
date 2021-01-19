<!--
 * @Author: zfd
 * @Date: 2020-11-13 14:57:31
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 16:05:28
 * @Description:
-->
<template>
  <div class="app-wrapper">
    <nav-bar :fixed="true" :z-index="8" left-arrow class="app-navbar" @click-left="onClickLeft">
      <van-icon slot="left" name="bars" color="#515151" class="app-icon" />
      <span slot="title" class="app-title">{{ currentMenu }}</span>

      <span slot="right" class="app-school">苏州市建科培训</span>
    </nav-bar>
    <van-popup v-model="showSideBar" position="left" class="app-sidebar" @click="showSideBar = false">
      <van-cell title="选课" icon="search" is-link to="/home" />
      <van-cell title="我的课程" icon="newspaper-o" is-link to="/my-subject" />
      <van-cell title="我的订单" icon="orders-o" is-link to="/order" />
      <van-cell title="我的信息" icon="smile-o" is-link to="/my-info" />
    </van-popup>

    <section class="app-main">
      <!-- <transition name="fade-transform" mode="out-in"> -->
      <router-view :key="key" />
      <!-- </transition> -->
    </section>
  </div>
</template>

<script>
// import { Dialog } from "vant";
import { NavBar } from 'vant'

export default {
  name: 'Layout',
  components: {
    NavBar
  },
  filters: {
  },

  data() {
    return {
      showSideBar: false
      // currentMenu: '我的信息'
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    currentMenu() {
      return this.$route.meta.title || ''
    }
  },
  mounted() {
    // this.getbuilds();
  },
  created() {
  },
  methods: {
    onClickLeft() {
      this.showSideBar = !this.showSideBar
    }

  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  min-height: 100%;

  // white-space: nowrap;
  // overflow-y: scroll;
  .app-navbar{
    height: 50px;
    overflow: hidden;

  }
  .app-title{
     color: #333;
    font-weight: bold;
  }
  .app-sidebar .van-cell__title {
    text-align-last: justify;
  }
  .app-main {
    // min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 50px
  }
  .app-school {
    font-size: 14px;
  }
}
</style>
