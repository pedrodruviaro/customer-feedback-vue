import { signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useFirebaseAuth } from 'vuefire'

export function useAuthActions() {
  const auth = useFirebaseAuth()!
  const router = useRouter()

  const isLoading = ref<boolean>(false)

  async function handleLogout() {
    try {
      isLoading.value = true

      await signOut(auth)

      router.push({ name: 'Login' })
    } catch (error) {
      router.push({ name: 'NetworkError' })
    } finally {
      isLoading.value = false
    }
  }

  const provider = new GoogleAuthProvider()
  const error = ref<boolean>(false)
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

  return {
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout
  }
}
