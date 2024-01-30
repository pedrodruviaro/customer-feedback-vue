import { getCurrentUser } from 'vuefire'
import { type RouteLocationNormalized } from 'vue-router'
import { useLoadingRoute } from '@/stores/loadingRoute'

export default async function (to: RouteLocationNormalized) {
  const loadingStore = useLoadingRoute()

  loadingStore.startLoading()

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
  }

  loadingStore.stopLoading()
}
