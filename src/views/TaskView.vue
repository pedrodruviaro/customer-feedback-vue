<script setup lang="ts">
import BaseBadge from '@/components/base/BaseBadge.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  id: string
}

const props = defineProps<Props>()

const task = ref<Task>()

const tasksStore = useTasksStore()
const router = useRouter()
async function getTask() {
  try {
    const doc = (await tasksStore.getSingleTask(props.id)) as Task | undefined

    if (!doc) {
      router.push({ name: 'NotFound' })
      return
    }

    task.value = doc
  } catch (error) {
    router.push({ name: 'NetworkError' })
    console.error(error)
  }
}

await getTask()
</script>

<template>
  <DefaultLayout>
    <section v-if="task">
      <div class="mb-8">
        <h2 class="font-bold text-xl md:text-2xl mb-2">{{ task.title }}</h2>
        <BaseBadge>{{ task.status }}</BaseBadge>
      </div>

      <div class="flex gap-3 items-center flex-wrap mb-4">
        <span class="w-8 aspect-square rounded-full bg-zinc-400 grid place-items-center font-bold">
          {{ task.belongs_to.name.charAt(0) }}
        </span>
        <p class="font-semibold text-lg">{{ task.belongs_to.name }}</p>
      </div>

      <div class="mb-8">
        <p class="whitespace-pre-wrap">
          {{ task.description }}
        </p>
      </div>

      <div class="flex items-center gap-4 flex-wrap justify-between">
        <p>{{ new Date(task.created_at).toLocaleDateString() }}</p>

        <div class="flex gap-4">
          <button>Edit Post</button>
          <button>Delete Post</button>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
