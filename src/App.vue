<!--
 * @Author: zfd
 * @Date: 2020-11-11 09:22:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 14:19:20
 * @Description:
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.app-container {
  height: 100%;
}
.app-icon {
  font-size: 30px !important;
}
// .tab-page {
//   padding-bottom: 12.5rem;
// }
</style>
