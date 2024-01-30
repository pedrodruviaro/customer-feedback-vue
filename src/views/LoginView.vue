<script setup lang="ts">
import LoginLayout from '@/layouts/LoginLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { PhGoogleLogo } from '@phosphor-icons/vue'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isLoading = ref<boolean>(false)
const error = ref<boolean>(false)

const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()!
const router = useRouter()
const route = useRoute()

async function handleLogin() {
  try {
    isLoading.value = true
    error.value = false

    const result = await signInWithPopup(auth, provider)

    if (!result.user) {
      error.value = true
      return
    }

    const redirectTo = typeof route.query.redirect === 'string' ? route.query.redirect : '/'

    router.push(redirectTo)
  } catch (err) {
    error.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginLayout>
    <section class="grid items-center text-center mt-10 lg:mt-20">
      <h1 class="text-3xl lg:text-4xl font-bold font-mono mb-4">Feedbacks made easy</h1>
      <p class="md:text-lg max-w-[60ch] mx-auto">
        Make continuous improvement simple and effective for teams and companies. Transform the way
        you receive and use feedback!
      </p>

      <BaseButton class="mt-8 mx-auto" @click="handleLogin" :loading="isLoading">
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
