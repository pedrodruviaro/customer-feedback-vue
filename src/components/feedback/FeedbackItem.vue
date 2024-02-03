<script setup lang="ts">
import TaskBadge from '@/components/task/TaskBadge.vue'
import { type Task } from '@/types'
import { useRouter } from 'vue-router'

interface Props {
  task: Task
}

const props = defineProps<Props>()

const router = useRouter()
function handleClick() {
  router.push({ name: 'KaizenTask', params: { id: props.task.id } })
}
</script>

<template>
  <li
    class="border-b p-4 cursor-pointer overflow-hidden hover:bg-zinc-100 transition-all"
    tabindex="0"
    @click="handleClick"
    @keypress.enter="handleClick"
  >
    <TaskBadge v-if="task.status" :status="task.status" />

    <h3 class="font-semibold my-2">{{ task.title }}</h3>
    <p class="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
      {{ task.description }}
    </p>
  </li>
</template>
