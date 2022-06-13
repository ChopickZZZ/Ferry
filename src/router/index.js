import { createRouter, createWebHistory } from 'vue-router'
import FerryMain from '../views/FerryMain'
import FerryTrucksInfo from '../views/FerryTrucksInfo'

const routes = [
  {
    path: '/',
    component: FerryMain
  },
  {
    path: '/trucks',
    component: FerryTrucksInfo
  },
  {
    path: '/notFound(.*)',
    redirect: FerryMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
  routes
})

export default router
