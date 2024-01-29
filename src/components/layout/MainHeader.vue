<script setup lang="ts">
import MainLogo from '@/components/layout/MainLogo.vue'
import MainNavigation from '@/components/layout/MainNavigation.vue'
</script>

<template>
  <header class="pt-4 border-b">
    <div class="wrapper">
      <div class="flex justify-between items-center gap-4 flex-wrap">
        <MainLogo />

        <span
          class="bg-red-200 text-red-600 text-lg font-bold grid place-items-center w-10 h-10 cursor-pointer rounded-full"
        >
          P
        </span>
      </div>

      <MainNavigation />
    </div>
  </header>
</template>
