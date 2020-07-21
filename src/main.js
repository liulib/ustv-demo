/*
 * @Author       : liulib
 * @Date         : 2020-07-20 20:33:01
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-21 15:34:49
 */

import Vue from 'vue'
import App from './App'

// 导入封装的uni.request
import { myRequest } from './utils/http'

// 将api挂载到vue的原型上
Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
