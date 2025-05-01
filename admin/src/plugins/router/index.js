import Vue from 'vue'
import VueRouter from 'vue-router'
import { privateRoutes } from './privateRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...privateRoutes,
    {
      path: '*',
      redirect: { name: 'PagesIndex' }
    }
  ]
})

export default router
