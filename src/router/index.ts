import { createRouter, createWebHistory } from 'vue-router'
import authGuard from '@/guards/auth'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(authGuard)

export default router
