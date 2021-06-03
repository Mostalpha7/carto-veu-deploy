import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'The Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/resources/index.vue')
  },
  {
    path: '/bibliometricDashboard',
    name: 'Bibliometric Dashboard',
    component: () => import('../views/dashboard/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
