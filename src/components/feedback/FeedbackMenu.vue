<script setup lang="ts">
import { statusValues } from '@/constants/statusValues'
import { computed } from 'vue'

interface Props {
  loading: boolean
}

interface Emits {
  (e: 'change', value: string): void
}

defineProps<Props>()

const statusOptions = computed(() => {
  const options = Object.values(statusValues)
  options.unshift('All')
  options.push('Unset')

  return options
})

const emit = defineEmits<Emits>()

function handleChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  const selectedValue = target.value

  emit('change', selectedValue)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <FormKit
      type="select"
      label="Filter"
      help="Filtro por status"
      :options="statusOptions"
      :disabled="loading"
      @change="handleChange"
    />
  </div>
</template>
