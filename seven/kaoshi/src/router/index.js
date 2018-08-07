import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fei from "@/components/fei"
import Evb from '@/components/evb'
import Eva from '@/components/eva'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
//   {
//    path: '/',
//    name: 'Fei',
//    component: Fei,
//  },
    {
      path: '/Evb',
      name: 'Evb',
      component: Evb,
    },
    {
      path: '/Eva',
      name: 'Eva',
      component: Eva,
    },
  ]
})
