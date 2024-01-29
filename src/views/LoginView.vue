<script setup lang="ts">
import LoginLayout from '@/layouts/LoginLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { PhGoogleLogo } from '@phosphor-icons/vue'
</script>

<template>
  <LoginLayout>
    <section class="grid items-center text-center mt-10 lg:mt-20">
      <h1 class="text-3xl lg:text-4xl font-bold font-mono mb-4">Feedbacks made easy</h1>
      <p class="md:text-lg max-w-[60ch] mx-auto">
        Make continuous improvement simple and effective for teams and companies. Transform the way
        you receive and use feedback!
      </p>

      <BaseButton class="mt-8 mx-auto">
        Login with Google
        <template #icon>
          <PhGoogleLogo />
        </template>
      </BaseButton>
    </section>
  </LoginLayout>
</template>
