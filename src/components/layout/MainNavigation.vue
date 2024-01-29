<script setup lang="ts">
import { PhMapTrifold, PhLightbulb } from '@phosphor-icons/vue'
</script>

<template>
  <div class="mt-4 flex gap-2 max-w-max">
    <RouterLink :to="{ name: 'Roadmap' }">
      <PhMapTrifold />
      Roadmap
    </RouterLink>

    <RouterLink :to="{ name: 'Feedback' }">
      <PhLightbulb />
      Feeback
    </RouterLink>
  </div>
</template>

<style scoped>
a {
  @apply flex justify-center p-2 items-center gap-2 font-semibold text-opacity-50 text-gray-900 hover:text-opacity-100 relative transition-all after:absolute after:bg-zinc-500 after:w-full after:h-px after:bottom-[-1px] after:hidden;
}

.router-link-active {
  @apply text-opacity-100 after:block;
}
</style>
