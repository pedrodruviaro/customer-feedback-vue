import { useEventBus } from '@vueuse/core'
import { type LoadingRouteEmit } from '@/types'

export function useLoadingRoute() {
  const loadingRouteBus = useEventBus<LoadingRouteEmit>('loadingRoute')

  function startLoading() {
    loadingRouteBus.emit({
      loading: true
    })
  }

  function stopLoading() {
    loadingRouteBus.emit({
      loading: false
    })
  }

  return { loadingRouteBus, startLoading, stopLoading }
}
