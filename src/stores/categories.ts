import { type Category } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([
    {
      name: 'Estudo'
    },
    {
      name: 'Projeto'
    },
    {
      name: 'Operações'
    },
    {
      name: 'Backlog'
    }
  ])

  const categoriesNames = computed(() => {
    return categories.value.map((c) => c.name)
  })

  return { categories, categoriesNames }
})
