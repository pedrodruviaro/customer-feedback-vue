<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { PhArrowLineLeft } from '@phosphor-icons/vue'
</script>

<template>
  <main>
    <section class="wrapper mt-10 lg:mt-20 text-center">
      <h1 class="font-bold text-xl lg:text-2xl">Você está perdido.</h1>
      <p class="my-4">Parece que esse recurso não existe...</p>
      <BaseButton class="mx-auto" :link="true" :to="{ name: 'Roadmap' }" variant="outlined">
        <template #icon>
          <PhArrowLineLeft />
        </template>
        Voltar para a dashboard</BaseButton
      >
    </section>
  </main>
</template>
