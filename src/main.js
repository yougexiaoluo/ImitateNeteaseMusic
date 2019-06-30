import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import createStore from './store/index'
import { Button, Select, Col, Row } from 'element-ui'

// 导入iconfont样式
import './assets/css/iconfont.css'

// 调用方法
Vue.use(Vuex)
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false
// 解决移动端click事件延迟300ms问题
FastClick.attach(document.body)
// 创建store
const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
