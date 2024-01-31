import RoadmapView from '@/views/RoadmapView.vue'

export const routes = [
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
    component: () => import('@/views/FeedbackView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: () => import('@/views/NetworkErrorView.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]
