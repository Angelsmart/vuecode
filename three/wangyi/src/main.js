// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import Element from 'element-ui'
import store from '../store'
Vue.use(Element);

//Vue.prototype.$http = axiosInstance;

//获取后台数据    
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   axios,
   store,
  render: h => h(App)//ES6写法
})
