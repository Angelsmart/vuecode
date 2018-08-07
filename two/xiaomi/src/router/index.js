import Vue from 'vue'
import Router from 'vue-router'
import Home from '../xiaomihome'
import Millet from '../client/new/Millet-mall'
import Miui from '../client/new/miui'
import Lot from '../client/new/lot'
import Cloud from '../client/new/The_cloud_service'
import Drop from '../client/new/water_drop'
import Financial from '../client/new/financial'
import Produc from '../client/new/produc'
import Select from '../client/new/select_Region'

import Xiaomi from '../client/presentation/pr_xiaomi'
import Hongmi from '../client/presentation/pr_hongmi'
import Winter from '../client/presentation/pr_winter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
			    path:'/Millet',
			    name:'Millet',
			    component:Millet,
			    alias:'小米商城'
			   
			},
			{
			    path:'/Miui',
			    name:'Miui',
			    component:Miui,
			    alias:'Miui',
			    asa:"|"
			},
			{
			    path:'/Lot',
			    name:'Lot',
			    component:Lot,
			    alias:'LOT',
			    asa:"|"
			},
			{
			    path:'/Cloud',
			    name:'Cloud',
			    component:Cloud,
			    alias:'云服务',
			    asa:"|"
			},
			{
			    path:'/Drop',
			    name:'Drop',
			    component:Drop,
			    alias:'水滴',
			    asa:"|"
			},
			{
			    path:'/Financial',
			    name:'Financial',
			    component:Financial,
			    alias:'金融',
			    asa:"|"
			},
			{
			    path:'/Produc',
			    name:'Produc',
			    component:Produc,
			    alias:'有品',
			    asa:"|"
			},
			{
			    path:'/Select',
			    name:'Select',
			    component:Select,
			    alias:'Select Region',
			     asa:"|"
			},
      {
			    path:'/Xiaomi',
			    name:'Xiaomi',
			    component:Xiaomi,
			     alias:"1",
			     hidden:true
			},
			{
			    path:'/Hongmi',
			    name:'Hongmi',
			    component:Hongmi,
			    alias:"2",
			    hidden:true
			},
			{
			    path:'/Winter',
			    name:'Winter',
			    component:Winter,
			     alias:"3",
			     hidden:true
			},
		
  ]
})
