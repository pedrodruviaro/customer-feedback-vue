import { createRouter, createWebHistory } from 'vue-router'
import authGuard from '@/guards/auth'
import { loadingRouteStarted, loadingRouteEnded } from '@/guards/loading'
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
router.beforeEach(loadingRouteStarted)
router.afterEach(loadingRouteEnded)

export default router
