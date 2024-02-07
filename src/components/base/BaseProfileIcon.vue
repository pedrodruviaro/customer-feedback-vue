<script setup lang="ts">
import { computed } from 'vue'
import { useAuthActions } from '@/composables/useAuthActions'
import { PhSignOut } from '@phosphor-icons/vue'
import { ref } from 'vue'

interface Props {
  label: string
}

const props = defineProps<Props>()

const firstLetter = computed(() => {
  return props.label?.charAt(0).toUpperCase()
})

const { logout } = useAuthActions()

const isOptionsActive = ref(false)
</script>

<template>
  <div class="relative">
    <button
      @click="isOptionsActive = !isOptionsActive"
      class="bg-red-200 text-red-600 text-lg font-bold grid place-items-center w-10 h-10 cursor-pointer rounded-full"
    >
      {{ firstLetter }}
    </button>

    <div class="rounded shadow-md absolute right-0">
      <Transition>
        <button class="flex items-center gap-2 p-2" v-if="isOptionsActive" @click="logout">
          <PhSignOut />
          Logout
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
