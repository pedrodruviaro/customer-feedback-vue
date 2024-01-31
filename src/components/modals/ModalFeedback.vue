<script setup lang="ts">
import { useCurrentUser, useFirestore } from 'vuefire'
import { addDoc, collection } from 'firebase/firestore'

interface Fields {
  title: string
  category: string
  description: string
}

const user = useCurrentUser()
const db = useFirestore()

const categories = ['Estudo', 'Projeto', 'Operações', 'Backlog']

async function handleNewTask(fields: Fields) {
  const newTask = {
    category: fields.category,
    title: fields.title,
    description: fields.description,
    created_at: new Date().toISOString(),
    finish_by: '',
    status: '',
    is_finished: false,
    belongs_to: {
      name: user.value?.displayName,
      image: user.value?.photoURL
    }
  }

  try {
    const res = await addDoc(collection(db, 'kaizen'), newTask)

    console.log(res)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <FormKit type="form" :actions="false" @submit="handleNewTask">
      <FormKit
        type="text"
        label="Título do projeto"
        placeholder="Reduzir custos com..."
        name="title"
        validation="required"
      />

      <FormKit
        type="select"
        label="Categoria"
        name="category"
        id="class"
        placeholder="Selecione a categoria"
        validation="required"
        :options="categories"
      />

      <FormKit
        type="textarea"
        name="description"
        label="Feedback"
        placeholder="Descreva o feedbacks"
        validation="required"
      />

      <FormKit type="submit" label="Criar" prefix-icon="check" />
    </FormKit>
  </div>
</template>
