<script setup lang="ts">
import { type Task } from '@/types'
import { PhArrowSquareIn } from '@phosphor-icons/vue'

interface Props {
  task: Task
}

defineProps<Props>()
</script>

<template>
  <li class="hover:text-zinc-400 transition-all">
    <RouterLink
      :to="{ name: 'KaizenTask', params: { id: task.id } }"
      class="font-semibold flex items-start gap-2"
    >
      <PhArrowSquareIn class="flex-0 relative top-1" />
      <p class="flex-1 text-sm">{{ task.title }}</p>
    </RouterLink>
  </li>
</template>
