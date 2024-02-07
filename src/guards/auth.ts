import { type RouteLocationNormalized } from 'vue-router'
import { getCurrentUser } from 'vuefire'

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
  }
}
