import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 命名路由有一个默认的子路由，这个名字没有意义，控制台会警告
    // 正确做法是，如果又默认子路由，就不要给父路由起名字了
    // name: 'layout',
    component: Layout,
    children: [
      {
        path: '', // paht 为空会作为默认子路由渲染
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
