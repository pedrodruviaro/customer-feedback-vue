<script setup lang="ts">
import BaseSkeleton from '@/components/base/BaseSkeleton.vue'
</script>

<template>
  <div class="grid gap-4 lg:grid-cols-3 lg:gap-8">
    <BaseSkeleton class="w-full h-96 rounded-md" v-for="i in 3" :key="i" />
  </div>
</template>
