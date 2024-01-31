<script setup lang="ts">
import LoginLayout from '@/layouts/LoginLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { PhGoogleLogo } from '@phosphor-icons/vue'
import { useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router'
import { useAuthActions } from '@/composables/useAuthActions'

const router = useRouter()
const user = useCurrentUser()
if (user) {
  router.push({ name: 'Roadmap' })
}

const { isLoading, error, login } = useAuthActions()
</script>

<template>
  <LoginLayout>
    <section class="grid items-center text-center mt-10 lg:mt-20">
      <h1 class="text-3xl lg:text-4xl font-bold font-mono mb-4">Feedbacks made easy</h1>
      <p class="md:text-lg max-w-[60ch] mx-auto">
        Make continuous improvement simple and effective for teams and companies. Transform the way
        you receive and use feedback!
      </p>

      <BaseButton class="mt-8 mx-auto" @click="login" :loading="isLoading">
        Login with Google
        <template #icon>
          <PhGoogleLogo />
        </template>
      </BaseButton>
      <p class="text-red-600 mt-4" v-if="error">
        Failed to login... refresh the page and try again
      </p>
    </section>
  </LoginLayout>
</template>
