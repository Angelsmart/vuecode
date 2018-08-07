import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../homepage'
import Shouye from '@/client/nav/shouye'
import Domestic from '@/client/nav/Domestic'
import International from '@/client/nav/international'
import Plane from '@/client/nav/Plane'
import Train from '@/client/nav/Train'
import Bus from '@/client/nav/Bus'
import Tourist from '@/client/nav/Tourist'
import Sign from '@/client/nav/Sign'
import Register from '@/client/nav/register'
import Serviceone  from '@/client/shouye/service/service_one'
import Servicetwo  from '@/client/shouye/service/service_two'
import Servicethree  from '@/client/shouye/service/service_three'
import Servicefour  from '@/client/shouye/service/service_four'
import Servicefive  from '@/client/shouye/service/service_five'
import Servicesix  from '@/client/shouye/service/service_six'
import Huangshan  from '@/client/shouye/objective/huangshan'
import feilvbin  from '@/client/shouye/feilvbin/feilvbin'
import Kaoya  from '@/client/shouye/kaoya/kaoya'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Homepage',
      component: Homepage,
      zhu:true,
      children:[
        {path:'',name:'Shouye',component:Shouye,tabs:'首页',shou:true,children:[
            {path:'Serviceone',name:'Serviceone',component:Serviceone,tabs:'酒店预订',hidden:true},
		        {path:'Servicetwo',name:'Servicetwo',component:Servicetwo,tabs:'机票查询',hidden:true},
		        {path:'Servicethree',name:'Servicethree',component:Servicethree,tabs:'酒店团购',hidden:true},
		        {path:'Servicefour',name:'Servicefour',component:Servicefour,tabs:'热门城市',hidden:true},
		        {path:'Servicefive',name:'Servicefive',component:Servicefive,tabs:'合作伙伴',hidden:true},
		        {path:'Servicesix',name:'Servicesix',component:Servicesix,tabs:'常见酒店',hidden:true}
		       
         ]
        },
        {path:'Domestic',name:'Domestic',component:Domestic,tabs:'国内酒店'},
        {path:'International',name:'International',component:International,tabs:'国际酒店'},
        {path:'Plane',name:'Plane',component:Plane,tabs:'机票'},
        {path:'Train',name:'Train',component:Train,tabs:'火车票'},
        {path:'Bus',name:'Bus',component:Bus,tabs:'汽车票'},
        {path:'Tourist',name:'Tourist',component:Tourist,tabs:'旅游指南'}
       
        
      ]
    },
    {path:'/Sign',name:'Sign',component:Sign,tabs:'登录',coo:true},
    {path:'/Register',name:'Register',component:Register,tabs:'注册',coo:true},
    {path:'/huangshan',name:'Huangshan',component:Huangshan,huang:true},
    {path:'/feilvbin',name:'feilvbin',component:feilvbin,fei:true},
    {path:'/Kaoya',name:'Kaoya',component:Kaoya,fei:true},
  ],
})
