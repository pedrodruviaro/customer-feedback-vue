<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { PhArrowLineLeft } from '@phosphor-icons/vue'
import { useTitle } from '@vueuse/core'

useTitle('Network Error | Feedbacker')
</script>

<template>
  <main>
    <section class="wrapper mt-10 lg:mt-20 text-center">
      <h1 class="font-bold text-xl lg:text-2xl">Algo deu errado...</h1>
      <p class="my-4">Parece que alguma coisa ruim aconteceu</p>
      <BaseButton class="mx-auto" @click="$router.go(-1)">
        <template #icon>
          <PhArrowLineLeft />
        </template>
        Volte e tente novamente</BaseButton
      >
    </section>
  </main>
</template>
