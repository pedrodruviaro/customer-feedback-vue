import { useFirestore } from 'vuefire'
import { collection, where, query, getDocs } from 'firebase/firestore'
import { type Task } from '@/types'
import { statusValues } from '@/constants/statusValues'

const STATUS_VALUES = Object.values(statusValues)

export async function GET_ALL_TASKS(status: string) {
  const db = useFirestore()

  let q = query(collection(db, 'kaizen'))

  if (status !== 'All' && status !== 'Unset') {
    q = query(collection(db, 'kaizen'), where('status', '==', status))
  } else if (status === 'Unset') {
    q = query(collection(db, 'kaizen'), where('status', '==', ''))
  }

  const tasks: Task[] = []

  await fetch('https://dummyjson.com/users')
  await fetch('https://dummyjson.com/users')
  await fetch('https://dummyjson.com/users')

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const task: Task = doc.data() as Task
    task.id = doc.id

    tasks.push(task)
  })

  return tasks
}

export async function GET_ROADMAP_TASKS() {
  const db = useFirestore()
  const q = query(collection(db, 'kaizen'), where('status', 'in', STATUS_VALUES))
  const tasks: Task[] = []

  await fetch('https://dummyjson.com/users')
  await fetch('https://dummyjson.com/users')
  await fetch('https://dummyjson.com/users')

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const task: Task = doc.data() as Task
    task.id = doc.id

    tasks.push(task)
  })

  return tasks
}
