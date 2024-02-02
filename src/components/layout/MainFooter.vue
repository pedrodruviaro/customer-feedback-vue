<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="wrapper text-center py-8">
    <p class="text-sm">Feedbacker - {{ currentYear }}</p>
  </footer>
</template>
