<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications'
import { useTasksStore } from '@/stores/tasks'
import { statusValues } from '@/constants/statusValues'
import { ref } from 'vue'
import { useModal } from '@/composables/useModal'
import { useTaskComunication } from '@/composables/useTaskComunication'

const statusOptions = Object.values(statusValues)

interface Props {
  taskId: string
  currentStatus: string
}

interface Fields {
  status: string
}

const props = defineProps<Props>()

const state = {
  status: props.currentStatus
}

const loading = ref(false)
const { toast } = useNotifications()
const { updateTaskStatus } = useTasksStore()
const { close } = useModal()
const { notify } = useTaskComunication()

async function handleChangeStatus(fields: Fields) {
  const { status: newStatus } = fields

  try {
    loading.value = true

    await updateTaskStatus({ id: props.taskId, status: newStatus })

    toast({ action: 'success', message: 'Task updated!' })
    notify({ action: 'update' })
    close()
  } catch (error) {
    toast({ action: 'error', message: 'Failed to change status, refresh and try again' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <h2>Change task status</h2>

    <FormKit type="form" :actions="false" @submit="handleChangeStatus">
      <FormKit
        type="select"
        name="status"
        label="New status"
        validation="required"
        :value="state.status"
        :options="statusOptions"
      />

      <FormKit type="submit" label="Update" prefix-icon="check" />
    </FormKit>
  </div>
</template>
