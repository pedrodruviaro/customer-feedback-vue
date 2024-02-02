<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FeedbackItem from '@/components/feedback/FeedbackItem.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { PhPlus } from '@phosphor-icons/vue'
import { useModal } from '@/composables/useModal'

import { useTasksStore } from '@/stores/tasks'
import { onActivated, ref } from 'vue'
import { useRouter } from 'vue-router'

const tasksStore = useTasksStore()

const { open } = useModal()
function handleOpenModal() {
  open({ modal: 'feedback', props: { title: 'Hello props' } })
}

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
    <section class="mb-6">
      <h2 class="bold text-lg font-semibold">Feedback</h2>
    </section>

    <section class="flex items-center justify-between border rounded-md px-4 py-2 mb-6">
      <h3 class="font-semibold text-neutral-600">Share your feedback</h3>

      <BaseButton :icon-only="true" @click="handleOpenModal">
        <template #icon>
          <PhPlus size="19" />
        </template>
      </BaseButton>
    </section>

    <BaseCard class="border rounded-md">
      <template #header>
        <div class="flex items-center gap-2">
          <label>
            Filter
            <select>
              <option value="">Select</option>
            </select>
          </label>

          <label>
            Categories
            <select>
              <option value="">Select</option>
            </select>
          </label>
        </div>
      </template>

      <template #default>
        <ul class="grid" v-if="tasksStore.tasks && !loading">
          <FeedbackItem v-for="task in tasksStore.tasks" :key="task.id" :task="task" />
        </ul>

        <p v-else-if="loading">Loading...</p>
      </template>
    </BaseCard>
  </DefaultLayout>
</template>

<style scoped>
li:last-child {
  @apply border-none;
}
</style>
