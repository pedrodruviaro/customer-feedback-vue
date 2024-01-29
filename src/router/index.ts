import { createRouter, createWebHistory } from 'vue-router'
import RoadmapView from '../views/RoadmapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Roadmap',
      component: RoadmapView
    },
    {
      path: '/kaizen',
      name: 'Kaizen',
      component: () => import('../views/KaizenView.vue')
    }
  ]
})

export default router
