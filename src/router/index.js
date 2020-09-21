import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
