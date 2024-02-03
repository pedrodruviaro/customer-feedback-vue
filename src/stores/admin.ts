import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCurrentUser } from 'vuefire'
import { CHECK_ADMIN_STATUS } from '@/services/api'

export const useAdminStore = defineStore('admin', () => {
  const isAdmin = ref<boolean | null>(null)

  async function checkAdminStatus() {
    const user = await getCurrentUser()

    if (!user) return

    const userId = user?.uid
    const { isAdmin: adminStatus } = await CHECK_ADMIN_STATUS(String(userId))
    isAdmin.value = adminStatus

    return { adminStatus }
  }

  return { isAdmin, checkAdminStatus }
})
