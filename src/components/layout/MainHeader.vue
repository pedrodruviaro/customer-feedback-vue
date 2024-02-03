<script setup lang="ts">
import MainLogo from '@/components/layout/MainLogo.vue'
import MainNavigation from '@/components/layout/MainNavigation.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useAuthActions } from '@/composables/useAuthActions'
import { useAdminStore } from '@/stores/admin'

const adminStore = useAdminStore()

const { logout } = useAuthActions()
</script>

<template>
  <header class="pt-4 border-b">
    <div class="wrapper">
      <div class="flex justify-between items-center gap-4 flex-wrap">
        <MainLogo />
        <button @click="logout">Logout</button>

        <div class="flex items-center gap-4">
          <BaseButton
            variant="outlined"
            :link="true"
            :to="{ name: 'Admin' }"
            v-if="adminStore.isAdmin"
            >Admin Dashboard</BaseButton
          >
          <span
            class="bg-red-200 text-red-600 text-lg font-bold grid place-items-center w-10 h-10 cursor-pointer rounded-full"
          >
            P
          </span>
        </div>
      </div>
      <MainNavigation />
    </div>
  </header>
</template>
