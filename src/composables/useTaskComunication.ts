import { useEventBus } from '@vueuse/core'
import { type TaskNotificationPayload } from '@/types'

interface NotifyArgs {
  action: 'update' | 'create' | 'delete'
}

export function useTaskComunication() {
  const taskBus = useEventBus<TaskNotificationPayload>('task')

  function notify({ action }: NotifyArgs) {
    taskBus.emit({
      action
    })
  }

  return { notify, taskBus }
}
