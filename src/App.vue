<script setup lang="ts">
import { RouterView } from 'vue-router'
import ModalFactory from '@/components/factory/ModalFactory.vue'
</script>

<template>
  <RouterView />

  <Teleport to="body">
    <ModalFactory />
  </Teleport>
</template>
