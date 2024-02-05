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
      <Suspense>
        <component :is="Component" />

        <template #fallback>
          <LoadingScreen />
        </template>
      </Suspense>
    </template>
  </RouterView>

  <Teleport to="body">
    <ModalFactory />
  </Teleport>
</template>
