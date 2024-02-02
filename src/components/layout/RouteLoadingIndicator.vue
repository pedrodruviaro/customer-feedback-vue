<script setup lang="ts">
import { useLoadingRoute } from '@/composables/useLoadingRoute'
import { computed, ref } from 'vue'

const { loadingRouteBus } = useLoadingRoute()

const loadingWidth = ref<string>('0')
const isVisible = ref<boolean>(false)

loadingRouteBus.on((payload) => {
  if (payload.loading === true) {
    loadingWidth.value = '80'
    isVisible.value = true
  } else {
    loadingWidth.value = '100'

    setTimeout(() => {
      isVisible.value = false
    }, 300)
  }
})

const loadingWidthStyle = computed(() => {
  return `${loadingWidth.value}%`
})
</script>

<template>
  <div
    class="fixed top-0 h-1 bg-green-400 transition-all ease-out duration-200"
    :style="{ width: loadingWidthStyle }"
    v-if="isVisible"
  ></div>
</template>
