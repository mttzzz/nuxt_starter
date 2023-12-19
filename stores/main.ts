import { defineStore } from 'pinia'
type MainStore = {
  example: number
}

export const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    example: 1,
  }),
})
