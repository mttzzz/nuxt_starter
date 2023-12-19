import { defineStore } from 'pinia'
type MainStore = {
  example: number
}

export const useAlertsStore = defineStore('main', {
  state: (): MainStore => ({
    example: 1,
  }),
})
