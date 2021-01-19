/*
 * @Author: zfd
 * @Date: 2020-11-11 09:22:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 14:04:43
 * @Description:
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// import 'vant/lib/index.css'
import '@/styles/index.scss' // global css
import 'amfe-flexible'
import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
// import vant-component global
import 'vant/lib/index.css'
import '@/plugins/vant'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// Vue.config.productionTip = false
const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
