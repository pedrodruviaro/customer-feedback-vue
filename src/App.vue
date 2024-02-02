<script setup lang="ts">
import { RouterView } from 'vue-router'
import ModalFactory from '@/components/factory/ModalFactory.vue'
import RouteLoadingIndicator from '@/components/layout/RouteLoadingIndicator.vue'
import LoadingScreen from '@/components/layout/LoadingScreen.vue'
</script>

<template>
  <RouteLoadingIndicator />

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade">
        <KeepAlive>
          <Suspense>
            <component :is="Component" />

            <template #fallback>
              <LoadingScreen />
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>

  <Teleport to="body">
    <ModalFactory />
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
