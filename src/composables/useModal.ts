import type { ModalFactoryPayload } from '@/types'
import { useEventBus } from '@vueuse/core'

interface OpenProps {
  modal: string
  props?: object
}

export function useModal() {
  const modalBus = useEventBus<ModalFactoryPayload>('modal')

  function open({ modal, props }: OpenProps) {
    modalBus.emit({
      open: true,
      modal: modal,
      props: props
    })
  }

  function close() {
    modalBus.emit({
      open: false,
      modal: '',
      props: {}
    })
  }

  return { open, close, modalBus }
}
