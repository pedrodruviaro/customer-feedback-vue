<script setup lang="ts">
import FeedbackItem from '@/components/feedback/FeedbackItem.vue'
import type { Task } from '@/types'

interface Props {
  tasks: Task[]
}

defineProps<Props>()
</script>

<template>
  <ul class="grid">
    <FeedbackItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<style scoped>
li:last-child {
  @apply border-none;
}
</style>
