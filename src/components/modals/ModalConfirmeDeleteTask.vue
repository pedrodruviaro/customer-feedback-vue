<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue'
import { useModal } from '@/composables/useModal'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotifications } from '@/composables/useNotifications'

interface Props {
  taskTitle: string
  taskId: string
}

const props = defineProps<Props>()
const loading = ref<boolean>(false)
const { close } = useModal()
const { toast } = useNotifications()

const { deteleTask } = useTasksStore()
const router = useRouter()

async function handleDelete() {
  try {
    loading.value = true

    await deteleTask(props.taskId)

    toast({ action: 'success', message: 'Task deleted!' })
    close()
    router.push({ name: 'Feedback' })
  } catch (error) {
    toast({ action: 'error', message: 'Something went wrong... refresh and try again' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <h2>Are you sure you want to delete the task:</h2>
    <p class="font-bold">{{ taskTitle }}</p>

    <div class="flex justify-end gap-4 mt-5">
      <BaseButton variant="outlined" @click="close">Cancel</BaseButton>
      <BaseButton @click="handleDelete" :loading="loading">Confirm</BaseButton>
    </div>
  </div>
</template>
