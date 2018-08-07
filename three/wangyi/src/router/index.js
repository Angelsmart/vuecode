import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin'
import notFind from '../client/notFind'
import Shouye from '../client/nav/shouye'
import Tong from '../client/nav/tongxun'
import Ying from '../client/nav/yingyong'
import Gao from '../client/nav/caogao'
import Shouone from '../client/nav/shouyeone'
import Daiban from '../client/nav/daiban'

Vue.use(Router)

const router = new Router({
	//目的：是为了以后能动态的渲染路由，不需要一步一步去拿路由了，
	//export default就是给其他需要到路由的页面提供了一个能够循环路由的出口。
	mode:'hash',//全称：hashHistory 以哈希的方式进行跳转
  routes: [
    {
      path: '',
      name: 'Admin',
      component: Admin,
      children:[
        {path: 'shouye',name: 'Shouye',tabs:'首页',component: Shouye,children:[
           {path: 'Shouone',name: 'Shouone',tabs:'红旗邮箱',component: Shouone},
           {path: 'Daiban',name: 'Daiban',tabs:'待办邮箱',component: Daiban}
        ]},
        {path: 'tong',name: 'Tong',tabs:'通信录',component: Tong},
        {path: 'ying',name: 'Ying',tabs:'应用中心',component: Ying},
        {path: 'gao',name: 'Gao',tabs:'草稿箱',component: Gao},
      ]
    },
    {
      path: '*',
      name: 'notFind',
      component: notFind,
      hidden:'true'
    },
  ]
})
//路由导航拦截，也就是官方所说的导航钩子，作用是检测登录或者路由跳转之类的页面是否合法，如果不合法就引导去登录页面重新登录系统或者其他
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    const adminUser = JSON.parse(sessionStorage.getItem('admin'));
    const projectManagerUser = JSON.parse(sessionStorage.getItem('project_manager'));
    if (to.matched.some(r => r.meta.isAdmin)) {
      if (adminUser) {
        next();
      } else {
        next({
          name: 'adminLogin',
        });
      }
    } else if (to.matched.some(r => r.meta.isProjectManager)) {
      if (projectManagerUser) {
        next();
      } else {
        next({
          name: 'projectManagerLogin',
        });
      }
    }
  } else {
    next();
  }
});

export default router;