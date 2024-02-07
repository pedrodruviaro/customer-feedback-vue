import { type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
import { useLoadingRoute } from '@/composables/useLoadingRoute'

function loadingRouteStarted(
  _: RouteLocationNormalized,
  _2: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const { startLoading } = useLoadingRoute()
  startLoading()
  next()
}

function loadingRouteEnded() {
  const { stopLoading } = useLoadingRoute()
  stopLoading()
}

export { loadingRouteStarted, loadingRouteEnded }
