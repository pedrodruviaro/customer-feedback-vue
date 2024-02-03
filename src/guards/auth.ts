import { getCurrentUser } from 'vuefire'
import { type RouteLocationNormalized } from 'vue-router'
import { useAdminStore } from '@/stores/admin'

export default async function (to: RouteLocationNormalized) {
  if (to.meta?.needsAuth) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return {
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      }
    }

    if (currentUser && to.meta.needsAdmin) {
      const adminStore = useAdminStore()

      if (adminStore.isAdmin === null) {
        await adminStore.checkAdminStatus()
      }

      if (!adminStore.isAdmin) {
        return {
          name: 'Roadmap'
        }
      }
    }
  }
}
