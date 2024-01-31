<script setup lang="ts">
import RoadmapGroup from '@/components/roadmap/RoadmapGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()

await tasksStore.getAllTasks()
</script>

<template>
  <DefaultLayout>
    <h2 class="bold text-lg font-semibold mb-6">Roadmap</h2>

    <section class="grid gap-4 lg:grid-cols-3 lg:gap-8" v-if="tasksStore.tasksByGroup">
      <RoadmapGroup
        v-for="(group, title) of tasksStore.tasksByGroup"
        :key="group.color"
        :color="group.color"
        :items="group.items"
        :title="String(title)"
      />
    </section>
  </DefaultLayout>
</template>
