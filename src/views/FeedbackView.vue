<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { PhPlus } from '@phosphor-icons/vue'
import { useModal } from '@/composables/useModal'

const { open } = useModal()

function handleOpenModal() {
  open({ modal: 'feedback', props: { title: 'Hello props' } })
}
</script>

<template>
  <DefaultLayout>
    <section class="mb-6">
      <h2 class="bold text-lg font-semibold">Feedback</h2>
    </section>

    <section class="flex items-center justify-between border rounded-md px-4 py-2 mb-6">
      <h3 class="font-semibold text-neutral-600">Share your feedback</h3>

      <BaseButton :icon-only="true" @click="handleOpenModal">
        <template #icon>
          <PhPlus size="19" />
        </template>
      </BaseButton>
    </section>

    <BaseCard class="border rounded-md">
      <template #header>
        <div class="flex items-center gap-2">
          <label>
            Filter
            <select>
              <option value="">Select</option>
            </select>
          </label>

          <label>
            Categories
            <select>
              <option value="">Select</option>
            </select>
          </label>
        </div>
      </template>

      <template #default>
        <ul class="grid">
          <li class="border-b p-4 cursor-pointer" v-for="i in 10" :key="i">
            <h3 class="font-semibold mb-2">Criação de um portfólio público de criativos da bowe</h3>
            <p class="text-sm">
              A cada flow a bowe produz uma série de conteúdos e assets e que são cada vez melhores,
              tenho certeza. Mas isso não chega para o comercial poder utilizar nas
            </p>
          </li>
        </ul>
      </template>
    </BaseCard>
  </DefaultLayout>
</template>

<style scoped>
li:last-child {
  @apply border-none;
}
</style>
