<script setup lang="ts">
import MainLogo from '@/components/layout/MainLogo.vue'
import MainNavigation from '@/components/layout/MainNavigation.vue'
import BaseProfileIconVue from '@/components/base/BaseProfileIcon.vue'
import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()
</script>

<template>
  <header class="pt-4 border-b">
    <div class="wrapper">
      <div class="flex justify-between items-center gap-4 flex-wrap">
        <MainLogo />

        <div class="flex items-center gap-4">
          <BaseProfileIconVue :label="String(user?.displayName)" />
        </div>
      </div>
      <MainNavigation />
    </div>
  </header>
</template>
