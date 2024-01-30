import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingRoute = defineStore('loadingRoute', () => {
  const loading = ref<boolean>(false)
  const finished = ref<boolean>(false)

  function startLoading() {
    finished.value = false
    loading.value = true
  }

  function stopLoading() {
    loading.value = false

    setTimeout(() => {
      finished.value = true
    }, 200)
  }

  return {
    loading,
    finished,
    startLoading,
    stopLoading
  }
})
