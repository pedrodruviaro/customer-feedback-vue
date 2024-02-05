import { useFirestore } from 'vuefire'
import {
  collection,
  where,
  query,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  updateDoc
} from 'firebase/firestore'
import { type Task } from '@/types'
import { statusValues } from '@/constants/statusValues'

const STATUS_VALUES = Object.values(statusValues)

export async function GET_ALL_TASKS(status: string) {
  const db = useFirestore()

  let q = query(collection(db, 'kaizen'))

  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')

  if (status !== 'All') {
    q = query(collection(db, 'kaizen'), where('status', '==', status))
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

  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')
  await fetch('https://dummyjson.com/products')

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

export async function DELETE_TASK(id: string) {
  const db = useFirestore()

  await deleteDoc(doc(db, 'kaizen', id))
}

export async function CREATE_TASK(newTask: Task) {
  const db = useFirestore()
  await addDoc(collection(db, 'kaizen'), newTask)
}

export async function UPDATE_TASK(task: Task) {
  const db = useFirestore()
  const docRef = doc(db, 'kaizen', task.id)

  await updateDoc(docRef, task)
}
