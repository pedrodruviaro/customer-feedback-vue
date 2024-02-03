<script setup lang="ts">
import TaskBadge from '@/components/task/TaskBadge.vue'
import { type Task } from '@/types'

interface Props {
  task: Task
}

defineProps<Props>()
</script>

<template>
  <li class="border-b p-4 cursor-pointer overflow-hidden">
    <TaskBadge v-if="task.status" :status="task.status" />

    <h3 class="font-semibold my-2">{{ task.title }}</h3>
    <p class="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
      {{ task.description }}
    </p>
  </li>
</template>
