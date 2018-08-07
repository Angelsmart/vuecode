// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import axiosInstance from 'https'
import router from './router'
import $ from 'jquery'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

//Vue.prototype.$http = axiosInstance;

//获取后台数据    
Vue.prototype.$http = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
 /* template: '<App/>',
  components: { App }*/
  render: h => h(App)//ES6写法
})
