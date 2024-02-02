<script setup lang="ts">
import { PhArrowSquareIn } from '@phosphor-icons/vue'
import BaseCard from '@/components/base/BaseCard.vue'
import type { Task } from '@/types'

interface Props {
  items: Array<Task>
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
      <div class="p-4">
        <ul class="grid gap-6 content-start h-96 overflow-y-scroll" v-if="items.length > 0">
          <li v-for="item in items" :key="item.title">
            <RouterLink to="/" class="font-semibold flex items-start gap-2">
              <PhArrowSquareIn class="flex-0 relative top-1" />
              <p class="flex-1 text-sm">{{ item.title }}</p>
            </RouterLink>
          </li>
        </ul>
        <p v-else>Nada pra mostrar</p>
      </div>
    </template>
  </BaseCard>
</template>
