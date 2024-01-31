<script setup lang="ts">
import { useLoadingRoute } from '@/stores/loadingRoute'
import { computed, ref, watchEffect } from 'vue'

const loadingStore = useLoadingRoute()

const loadingWidth = ref<string>('0')
const loadingWidthStyle = computed(() => {
  return `${loadingWidth.value}%`
})

watchEffect(() => {
  if (loadingStore.loading === true) {
    loadingWidth.value = '80'
  } else if (loadingStore.loading === false) {
    loadingWidth.value = '100'
  }
})
</script>

<template>
  <div
    class="fixed top-0 h-1 bg-green-400 transition-all ease-out duration-200"
    :style="{ width: loadingWidthStyle }"
    v-if="!loadingStore.finished"
  ></div>
</template>
