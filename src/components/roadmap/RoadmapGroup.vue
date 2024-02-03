<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import RoadmapItem from '@/components/roadmap/RoadmapItem.vue'
import type { Task } from '@/types'

interface Props {
  items: Array<Task>
  color: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <BaseCard class="border rounded-md">
    <template #header>
      <div class="flex items-center gap-2">
        <span
          class="w-2 aspect-square rounded-full block"
          :style="{ backgroundColor: color }"
        ></span>
        <h3 class="font-semibold">{{ title }}</h3>
      </div>
    </template>

    <template #default>
      <div class="p-4">
        <ul class="grid gap-6 content-start h-96 overflow-y-scroll" v-if="items.length > 0">
          <RoadmapItem v-for="item in items" :key="item.title" :task="item" />
        </ul>
        <p v-else>Nada pra mostrar</p>
      </div>
    </template>
  </BaseCard>
</template>
