<script setup lang="ts">
import { PhCircleNotch } from '@phosphor-icons/vue'

interface Props {
  loading?: boolean
  variant?: 'filled' | 'outlined'
  trailing?: boolean
  link?: boolean
  to?: string | Object
}

withDefaults(defineProps<Props>(), {
  trailing: true,
  to: '/'
})
</script>

<template>
  <button
    :disabled="loading"
    :class="[trailing === true ? 'flex-row' : 'flex-row-reverse', variant]"
    v-if="!link"
  >
    <span v-if="loading">
      <PhCircleNotch class="animate-spin" />
    </span>

    <span v-show="!loading">
      <slot name="icon" />
    </span>

    <span>
      <slot />
    </span>
  </button>

  <RouterLink
    v-else
    :to="to"
    :class="[
      trailing === true ? 'flex-row' : 'flex-row-reverse',
      loading ? 'disabled' : '',
      variant
    ]"
  >
    <span v-if="loading">
      <PhCircleNotch class="animate-spin" />
    </span>

    <span v-show="!loading">
      <slot name="icon" />
    </span>

    <span>
      <slot />
    </span>
  </RouterLink>
</template>

<style scoped>
button,
a {
  @apply bg-neutral-800 max-w-max text-neutral-50 px-4 py-2 rounded-md flex items-center gap-2 disabled:opacity-75 transition-all hover:bg-neutral-700;
}

.outlined {
  @apply bg-transparent text-neutral-800 border border-neutral-800 hover:bg-neutral-200;
}

.disabled {
  @apply opacity-75 cursor-not-allowed pointer-events-none;
}
</style>
