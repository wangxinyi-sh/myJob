import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  { // 首页
    path: '/',
    name: 'Home',
    component: Home
  },
  { // 帮助
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  },
  { // 例子
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/demo/demo.vue'),
    children:[
      {
        path:'/demo/infoChart',
        name:'demoInfoChart',
        component: () => import('../views/demo/infoChart.vue'),
        hidden:true,
      },
      {
        path:'/demo/infoPaper',
        name:'demoInfoPaper',
        component: () => import('../views/demo/infoPaper.vue'),
        hidden:true,
      },
      {
        path:'/demo/map',
        name:'demoMap',
        component: () => import('../views/demo/map.vue'),
        hidden:true,
      },
    ],
  },
  { // 创建
    path: '/create',
    name: 'Create',
    component: () => import('../views/create/create.vue'),
    children:[
      {
        path:'/create/infoChart',
        name:'createInfoChart',
        component: () => import('../views/create/infoChart.vue'),
        hidden:true,
      },
      {
        path:'/create/infoPaper',
        name:'createInfoPaper',
        component: () => import('../views/create/infoPaper.vue'),
        hidden:true,
      },
      {
        path:'/create/map',
        name:'createMap',
        component: () => import('../views/create/map.vue'),
        hidden:true,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
