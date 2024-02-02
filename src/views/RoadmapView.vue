<script setup lang="ts">
import RoadmapGroup from '@/components/roadmap/RoadmapGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import SkeletonRoadmapGroups from '@/components/skeletons/SkeletonRoadmapGroups.vue'

import { useTasksStore } from '@/stores/tasks'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const tasksStore = useTasksStore()
const loading = ref(false)

const router = useRouter()
async function fetchTasks() {
  try {
    loading.value = true
    await tasksStore.getTasksWithStatus()
  } catch (error) {
    router.push({ name: 'NetworkError' })
  } finally {
    loading.value = false
  }
}

onMounted(async () => await fetchTasks())
</script>

<template>
  <DefaultLayout>
    <h2 class="bold text-lg font-semibold mb-6">Roadmap</h2>

    <section class="grid gap-4 lg:grid-cols-3 lg:gap-8" v-if="!loading">
      <RoadmapGroup
        v-for="(group, title) of tasksStore.tasksByGroup"
        :key="group.color"
        :color="group.color"
        :items="group.items"
        :title="String(title)"
      />
    </section>

    <SkeletonRoadmapGroups v-else />
  </DefaultLayout>
</template>
