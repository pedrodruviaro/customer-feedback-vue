import { type Task, type TaskRelations } from '@/types'
import { defineStore } from 'pinia'
import { colors } from '@/constants/roadmapColorsByGroup'
import { statusValues } from '@/constants/statusValues'
import { computed } from 'vue'
import { ref } from 'vue'
import { GET_ALL_TASKS } from '@/services/api'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])

  const tasksByGroup = computed(() => {
    const relations: TaskRelations = {
      [statusValues.planned]: {
        color: colors[statusValues.planned],
        items: []
      },
      [statusValues.progress]: {
        color: colors[statusValues.progress],
        items: []
      },
      [statusValues.complete]: {
        color: colors[statusValues.complete],
        items: []
      }
    }

    tasks.value.forEach((task) => {
      if (relations[task.status]) {
        relations[task.status].items.push(task)
      }
    })

    return relations
  })

  async function getAllTasks() {
    const fetchedTasks = await GET_ALL_TASKS()

    tasks.value = fetchedTasks
  }

  return {
    tasks,
    tasksByGroup,
    getAllTasks
  }
})
