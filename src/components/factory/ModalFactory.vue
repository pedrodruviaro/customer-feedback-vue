<script lang="ts" setup>
import { defineAsyncComponent, reactive } from 'vue'
import { useModal } from '@/composables/useModal'
import type { ModalFactoryPayload } from '@/types'

interface State {
  isOpen: boolean
  component: string
  props: Object
}

const state = reactive<State>({
  isOpen: false,
  component: '',
  props: {}
})

const { modalBus } = useModal()
modalBus.on(listener)

function listener(payload: ModalFactoryPayload) {
  state.isOpen = payload.open
  state.component = payload.modal
  state.props = payload.props || {}
}

const ModalFeedback = defineAsyncComponent(() => import('@/components/modals/ModalFeedback.vue'))
const ModalConfirmeDeleteTask = defineAsyncComponent(
  () => import('@/components/modals/ModalConfirmeDeleteTask.vue')
)
const ModalChangeTaskStatus = defineAsyncComponent(
  () => import('@/components/modals/ModalChangeTaskStatus.vue')
)

const components: any = {
  feedback: ModalFeedback,
  deleteTask: ModalConfirmeDeleteTask,
  changeTaskStatus: ModalChangeTaskStatus
}
</script>

<template>
  <Transition name="fade">
    <div
      @click.self="state.isOpen = false"
      v-if="state.isOpen"
      class="fixed inset-0 bg-neutral-900 bg-opacity-50 grid place-items-center"
    >
      <div
        class="bg-neutral-50 m-4 p-4 w-[92%] max-w-[40rem] shadow-md rounded-md overflow-y-auto max-h-[90vh]"
      >
        <Component :is="components[state.component]" v-bind="state.props" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
