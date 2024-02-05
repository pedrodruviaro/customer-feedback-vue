<script setup lang="ts">
import { useCurrentUser } from 'vuefire'
import { useModal } from '@/composables/useModal'
import { useCategoriesStore } from '@/stores/categories'
import { statusValues } from '@/constants/statusValues'
import { useNotifications } from '@/composables/useNotifications'
import type { Task } from '@/types'
import { reactive, computed } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { emit } from 'process'

interface Fields {
  title: string
  category: string
  description: string
}

interface Props {
  task?: Task
  taskId?: string
}

const props = defineProps<Props>()

const { close } = useModal()
const { toast } = useNotifications()
const categoriesStore = useCategoriesStore()
const { createTask, updateTask } = useTasksStore()

const user = useCurrentUser()

const buttonLabel = computed(() => {
  return props.task ? 'Edit' : 'Create'
})

const initialState = {
  title: '',
  category: '',
  description: ''
}

if (props.task) {
  initialState.title = props.task.title
  initialState.category = props.task.category
  initialState.description = props.task.description
}

const state = reactive(initialState)

async function handleNewTask(fields: Fields) {
  const action = props.task ? 'edit' : 'create'

  let taskValues = {
    category: fields.category,
    title: fields.title,
    description: fields.description,
    created_at: new Date().toISOString(),
    finish_by: '',
    status: statusValues.unset,
    is_finished: false,
    belongs_to: {
      name: String(user.value?.displayName),
      uid: String(user.value?.uid)
    },
    id: ''
  }

  try {
    if (action === 'edit') {
      taskValues.created_at = String(props.task?.created_at)
      taskValues.status = String(props.task?.status)
      taskValues.finish_by = String(props.task?.finish_by)
      taskValues.is_finished = props.task?.is_finished || false
      taskValues.id = String(props.taskId)

      await updateTask(taskValues)

      toast({ action: 'success', message: 'Task updated!' })
      close()
      window.location.reload()
      return
    }

    await createTask(taskValues)
    toast({ action: 'success', message: 'Task created!' })
    close()
  } catch (error) {
    console.error(error)

    toast({ action: 'error', message: `Failed to ${action} the task. Refresh and try again` })
  }
}
</script>

<template>
  <div>
    <FormKit type="form" :actions="false" @submit="handleNewTask">
      <FormKit
        type="text"
        label="Title"
        placeholder="Create a new operation..."
        name="title"
        validation="required"
        :value="state.title"
      />

      <FormKit
        type="select"
        label="Category"
        name="category"
        id="class"
        placeholder="Select"
        validation="required"
        :options="categoriesStore.categoriesNames"
        :value="state.category"
      />

      <FormKit
        type="textarea"
        name="description"
        label="Feedback"
        placeholder="Describe"
        validation="required"
        :value="state.description"
      />

      <FormKit type="submit" :label="buttonLabel" prefix-icon="check" />
    </FormKit>
  </div>
</template>
