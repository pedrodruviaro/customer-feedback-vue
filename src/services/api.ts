import { useFirestore } from 'vuefire'
import { collection, where, query, getDocs, getDoc, doc } from 'firebase/firestore'
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

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const task: Task = doc.data() as Task
    task.id = doc.id

    tasks.push(task)
  })

  return tasks
}

export async function GET_SINGLE_TASK(id: string) {
  const db = useFirestore()

  // await fetch('https://dummyjson.com/users')

  const docRef = doc(db, 'kaizen', id)
  const docSnap = await getDoc(docRef)

  return docSnap.exists() ? docSnap.data() : undefined
}

export async function CHECK_ADMIN_STATUS(uid: string) {
  const db = useFirestore()
  const docRef = doc(db, 'kaizen_admins', uid)
  const docSnap = await getDoc(docRef)

  return { isAdmin: docSnap.exists() }
}
