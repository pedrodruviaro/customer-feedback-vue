<script setup lang="ts">
import ModalFactory from '@/components/factory/ModalFactory.vue'
import RouteLoadingIndicator from '@/components/layout/RouteLoadingIndicator.vue'
import LoadingScreen from '@/components/layout/LoadingScreen.vue'
import { RouterView } from 'vue-router'
import { useAdminStore } from '@/stores/admin'
import { onMounted } from 'vue'

const adminStore = useAdminStore()

onMounted(async () => {
  if (adminStore.isAdmin === null) {
    await adminStore.checkAdminStatus()
  }
})
</script>

<template>
  <RouteLoadingIndicator />

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade">
        <Suspense>
          <component :is="Component" />

          <template #fallback>
            <LoadingScreen />
          </template>
        </Suspense>
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
