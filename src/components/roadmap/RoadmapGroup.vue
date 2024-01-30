<script setup lang="ts">
import { PhArrowSquareIn } from '@phosphor-icons/vue'
import BaseCard from '@/components/base/BaseCard.vue'

interface Props {
  items: Array<any>
  color: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <BaseCard class="border rounded-md">
    <template #header>
      <div class="flex items-center gap-2">
        <span
          class="w-2 aspect-square rounded-full block"
          :style="{ backgroundColor: color }"
        ></span>
        <h3 class="font-semibold">{{ title }}</h3>
      </div>
    </template>

    <template #default>
      <ul class="grid gap-6 h-96 overflow-y-scroll p-4">
        <li v-for="item in items" :key="item.title">
          <RouterLink to="/" class="font-semibold flex items-start gap-2">
            <PhArrowSquareIn class="flex-0 relative top-1" />
            <p class="flex-1 text-sm">{{ item.title }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </BaseCard>
</template>
