<script setup lang="ts">
import { colors } from '@/constants/roadmapColorsByGroup'
import { computed } from 'vue'

interface Props {
  status: string
}

const props = defineProps<Props>()

const background = computed(() => {
  return colors[props.status]
})
</script>

<template>
  <div
    class="rounded-full px-2 py-1 font-semibold block max-w-max bg-neutral-300 text-xs text-white"
    :style="{ background }"
  >
    {{ status }}
  </div>
</template>
