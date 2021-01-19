<!--
 * @Author: zfd
 * @Date: 2020-11-12 14:18:15
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-12 14:29:55
 * @Description:
-->
<template>
  <div class="tabbar-container">
    <tabbar v-model="active">
      <tabbar-item name="search" icon="search">选课</tabbar-item>
      <tabbar-item name="learn" icon="newspaper-o">学习</tabbar-item>
      <tabbar-item name="my" icon="smile-o">我的</tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'TabbarSchool',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.tabbar-container{
  position: fixed;
  bottom: 0;
}
</style>
