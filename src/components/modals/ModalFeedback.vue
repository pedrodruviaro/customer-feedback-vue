<script setup lang="ts">
import { useModal } from '@/composables/useModal'

const { close } = useModal()

defineProps(['title'])
</script>

<template>
  <div>
    {{ title }}
    <h2>Essa é a modal de criação de novos feedbacks</h2>

    <button @click="close">FECHAR</button>
  </div>
</template>
