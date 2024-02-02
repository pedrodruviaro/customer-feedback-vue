<script setup lang="ts">
import BaseBadge from '@/components/base/BaseBadge.vue'
import { colors } from '@/constants/roadmapColorsByGroup'
import { computed } from 'vue'
import { type Task } from '@/types'

interface Props {
  task: Task
}

const props = defineProps<Props>()
const background = computed(() => {
  return colors[props.task.status]
})
</script>

<template>
  <li class="border-b p-4 cursor-pointer overflow-hidden">
    <BaseBadge v-if="task.status" :style="{ background }" class="text-white">
      {{ task.status }}
    </BaseBadge>
    <h3 class="font-semibold my-2">{{ task.title }}</h3>
    <p class="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
      {{ task.description }}
    </p>
  </li>
</template>
