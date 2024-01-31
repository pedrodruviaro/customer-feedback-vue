<script setup lang="ts">
interface Fields {
  title: string
  category: string
  description: string
}

defineProps(['title'])

const categories = ['Estudo', 'Projeto', 'Operações', 'Backlog']

function handleNewTask(fields: Fields) {
  console.log(fields)
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
