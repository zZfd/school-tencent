<!--
 * @Author: zfd
 * @Date: 2020-11-13 14:57:31
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 10:23:28
 * @Description:
-->
<template>
  <div class="my-wrapper">
    <nav-bar :fixed="true" :z-index="8" left-arrow class="my-navbar" @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon slot="left" name="arrow-left" color="#333" class="app-icon" />
      <span slot="title" class="my-title">{{ currentMenu }}</span>
      <van-icon slot="right" name="bars" color="#515151" class="app-icon" />

    </nav-bar>
    <van-popup v-model="showSideBar" position="right" class="app-sidebar" @click="showSideBar = false">
      <van-cell title="选课" icon="search" is-link to="/home" />
      <van-cell title="我的课程" icon="newspaper-o" is-link to="/my-subject" />
      <van-cell title="我的订单" icon="orders-o" is-link to="/order" />
      <van-cell title="我的信息" icon="smile-o" is-link to="/my-info" />
    </van-popup>
    <section class="my-main">
      <!-- <transition name="fade-transform" mode="out-in"> -->
      <router-view :key="key" />
      <!-- </transition> -->
    </section>
  </div>
</template>

<script>
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
      this.$router.go(-1)
    },
    onClickRight() {
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>

<style lang="scss" scoped>
.my-wrapper {
  min-height: 100%;
  .my-navbar{
    height: 50px;
    overflow: hidden;
  }
  .my-title {
    color: #333;
    font-weight: bold;
  }
  .my-main {
    // min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 50px
  }
}
</style>
