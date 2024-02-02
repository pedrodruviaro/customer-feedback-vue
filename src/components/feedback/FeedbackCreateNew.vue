<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { PhPlus } from '@phosphor-icons/vue'
import { useModal } from '@/composables/useModal'

const { open } = useModal()
function handleOpenModal() {
  open({ modal: 'feedback', props: { title: 'Hello props' } })
}
</script>

<template>
  <section class="flex items-center justify-between border rounded-md px-4 py-2 mb-6">
    <h3 class="font-semibold text-neutral-600">Share your feedback</h3>

    <BaseButton :icon-only="true" @click="handleOpenModal">
      <template #icon>
        <PhPlus size="19" />
      </template>
    </BaseButton>
  </section>
</template>
