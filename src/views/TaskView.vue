<script setup lang="ts">
import BaseProfileIcon from '@/components/base/BaseProfileIcon.vue'
import TaskBadge from '@/components/task/TaskBadge.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useTasksStore } from '@/stores/tasks'
import { useRouter } from 'vue-router'
import { type TaskNotificationPayload, type Task } from '@/types'
import { computed, onMounted, ref } from 'vue'
import { useCurrentUser } from 'vuefire'
import { useModal } from '@/composables/useModal'
import { useAdminStore } from '@/stores/admin'
import BaseButton from '@/components/base/BaseButton.vue'
import { useTaskComunication } from '@/composables/useTaskComunication'

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

const taskDate = computed(() => {
  return task.value ? new Date(task.value.created_at).toLocaleDateString() : ''
})

const user = useCurrentUser()
const isOwner = computed(() => {
  return user?.value?.uid === task.value?.belongs_to.uid
})

const { open } = useModal()
function handleDeleteTask() {
  open({
    modal: 'deleteTask',
    props: {
      taskId: props.id,
      taskTitle: task.value?.title
    }
  })
}

function handleEditTask() {
  open({
    modal: 'feedback',
    props: {
      task: task.value,
      taskId: props.id
    }
  })
}

function handleChangeTaskStatus() {
  open({
    modal: 'changeTaskStatus',
    props: {
      taskId: props.id,
      currentStatus: task.value?.status
    }
  })
}

const adminStore = useAdminStore()
onMounted(async () => {
  if (adminStore.isAdmin === null) {
    await adminStore.checkAdminStatus()
  }
})

const { taskBus } = useTaskComunication()
taskBus.on(listener)

async function listener(payload: TaskNotificationPayload) {
  if (payload.action === 'update') {
    await getTask()
  }
}
</script>

<template>
  <DefaultLayout>
    <section v-if="task">
      <div class="mb-8">
        <h2 class="font-bold text-xl md:text-2xl mb-2">{{ task.title }}</h2>
        <div class="flex flex-wrap justify-between gap-4 items-center">
          <TaskBadge :status="task.status" />
          <BaseButton v-if="adminStore.isAdmin" variant="outlined" @click="handleChangeTaskStatus"
            >Change Status</BaseButton
          >
        </div>
      </div>

      <div class="flex gap-3 items-center flex-wrap mb-4">
        <BaseProfileIcon :label="task.belongs_to.name" />
        <p class="font-semibold text-lg">{{ task.belongs_to.name }}</p>
      </div>

      <div class="mb-8">
        <p class="whitespace-pre-wrap">
          {{ task.description }}
        </p>
      </div>

      <div class="flex items-center gap-4 flex-wrap justify-between">
        <p class="text-sm font-semibold">{{ taskDate }}</p>

        <div class="flex gap-4" v-if="isOwner">
          <button class="hover:opacity-75" @click="handleEditTask">Edit Post</button>
          <button class="hover:opacity-75" @click="handleDeleteTask">Delete Post</button>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
