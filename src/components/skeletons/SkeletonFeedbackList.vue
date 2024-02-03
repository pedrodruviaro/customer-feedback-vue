<script setup lang="ts">
import BaseSkeletonVue from '@/components/base/BaseSkeleton.vue'
</script>

<template>
  <div class="grid gap-[2px]">
    <BaseSkeletonVue class="w-full h-24" v-for="i in 5" :key="i" />
  </div>
</template>
