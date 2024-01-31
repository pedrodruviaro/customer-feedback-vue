<script setup lang="ts">
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
</script>

<template>
  <div>
    <MainHeader />
    <main class="wrapper py-10 lg:py-16">
      <slot />
    </main>

    <MainFooter />
  </div>
</template>
