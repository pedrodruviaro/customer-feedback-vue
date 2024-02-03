<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FeedbackList from '@/components/feedback/FeedbackList.vue'
import FeedbackMenu from '@/components/feedback/FeedbackMenu.vue'
import FeedbackCreateNew from '@/components/feedback/FeedbackCreateNew.vue'
import FeedbackIntro from '@/components/feedback/FeedbackIntro.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import SkeletonFeedbackList from '@/components/skeletons/SkeletonFeedbackList.vue'
import { useTasksStore } from '@/stores/tasks'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const tasksStore = useTasksStore()

const router = useRouter()
const loading = ref(false)

async function fetchTasks(status = 'All') {
  try {
    loading.value = true
    await tasksStore.getAllTasks(status)
  } catch (error) {
    router.push({ name: 'NetworkError' })
  } finally {
    loading.value = false
  }
}

onMounted(async () => await fetchTasks())

async function handleMenuChange(status: string) {
  await fetchTasks(status)
}
</script>

<template>
  <DefaultLayout>
    <FeedbackIntro />
    <FeedbackCreateNew />

    <BaseCard class="border rounded-md">
      <template #header>
        <FeedbackMenu :loading="loading" @change="handleMenuChange" />
      </template>

      <template #default>
        <FeedbackList v-if="tasksStore.tasks && !loading" :tasks="tasksStore.tasks" />
        <SkeletonFeedbackList v-else-if="loading" />
      </template>
    </BaseCard>
  </DefaultLayout>
</template>
