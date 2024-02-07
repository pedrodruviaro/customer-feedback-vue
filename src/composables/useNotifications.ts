import 'vue-toast-notification/dist/theme-sugar.css'
import { useToast } from 'vue-toast-notification'

interface Toast {
  action: 'success' | 'error'
  message: string
}

export function useNotifications() {
  const $toast = useToast()

  function toast({ action, message }: Toast): void {
    $toast[action](message)
  }

  return {
    toast
  }
}
