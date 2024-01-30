<script setup lang="ts">
import { RouterView } from 'vue-router'
import ModalFactory from '@/components/factory/ModalFactory.vue'
import RouteLoadingIndicator from '@/components/layout/RouteLoadingIndicator.vue'
</script>

<template>
  <RouteLoadingIndicator />
  <RouterView />
  <Teleport to="body">
    <ModalFactory />
  </Teleport>
</template>
