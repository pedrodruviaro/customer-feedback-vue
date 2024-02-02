<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FeedbackList from '@/components/feedback/FeedbackList.vue'
import FeedbackMenu from '@/components/feedback/FeedbackMenu.vue'
import FeedbackCreateNew from '@/components/feedback/FeedbackCreateNew.vue'
import FeedbackIntro from '@/components/feedback/FeedbackIntro.vue'
import BaseCard from '@/components/base/BaseCard.vue'

import { useTasksStore } from '@/stores/tasks'
import { onActivated, ref } from 'vue'
import { useRouter } from 'vue-router'

const tasksStore = useTasksStore()

const router = useRouter()
const loading = ref(false)
async function fetchTasks() {
  try {
    loading.value = true
    await tasksStore.getAllTasks()
  } catch (error) {
    router.push({ name: 'NetworkError' })
  } finally {
    loading.value = false
  }
}

onActivated(async () => await fetchTasks())
</script>

<template>
  <DefaultLayout>
    <FeedbackIntro />
    <FeedbackCreateNew />
    <BaseCard class="border rounded-md">
      <template #header>
        <FeedbackMenu />
      </template>

      <template #default>
        <FeedbackList v-if="tasksStore.tasks && !loading" :tasks="tasksStore.tasks" />

        <p v-else-if="loading">Loading...</p>
      </template>
    </BaseCard>
  </DefaultLayout>
</template>
