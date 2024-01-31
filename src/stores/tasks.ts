import { type Task, type TaskRelations } from '@/types'
import { defineStore } from 'pinia'
import { colors } from '@/common/RoadmapColorsByGroup'
import { useFirestore } from 'vuefire'
import { collection, query, getDocs } from 'firebase/firestore'
import { computed } from 'vue'
import { ref } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])

  const tasksByGroup = computed(() => {
    const relations: TaskRelations = {
      Planned: {
        color: colors.Planned,
        items: []
      },
      'In Progress': {
        color: colors['In Progress'],
        items: []
      },
      Complete: {
        color: colors.Complete,
        items: []
      }
    }

    tasks.value.forEach((task) => {
      relations[task.status].items.push(task)
    })

    return relations
  })

  const db = useFirestore()
  const q = query(collection(db, 'kaizen'))
  async function getAllTasks() {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const task: Task = doc.data() as Task
      task.id = doc.id

      tasks.value.push(task)
    })
  }

  return {
    tasks,
    tasksByGroup,
    getAllTasks
  }
})
