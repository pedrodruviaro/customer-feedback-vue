import { createRouter, createWebHistory } from 'vue-router'
import RoadmapView from '../views/RoadmapView.vue'
import authGuard from '@/guards/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Roadmap',
      component: RoadmapView,
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/feedback',
      name: 'Feedback',
      meta: {
        needsAuth: true
      },
      component: () => import('../views/FeedbackView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    }
  ],

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
