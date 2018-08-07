// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(BaiduMap,{
	ak:'XbzPdRvrXghofLvi7G0rulVhFfLQisYZ'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
