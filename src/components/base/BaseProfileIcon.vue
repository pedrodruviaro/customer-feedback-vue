<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label: string
}

const props = defineProps<Props>()

const firstLetter = computed(() => {
  return props.label?.charAt(0).toUpperCase()
})
</script>

<template>
  <span
    class="bg-red-200 text-red-600 text-lg font-bold grid place-items-center w-10 h-10 cursor-pointer rounded-full"
  >
    {{ firstLetter }}
  </span>
</template>
