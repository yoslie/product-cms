import { defineStore } from 'pinia'

type IDataBerry = {
  name: string
  url: string
}

export const usePokeStore = defineStore('berries', {
  state: () => ({
    berries: [] as IDataBerry[],
    count: 0,
    offset: 0,
    limit: 20,
  }),
  actions: {
    setBerries(data: IDataBerry[]): void {
      this.berries = data
    },
  },
})
