import { defineStore } from 'pinia'

type IDataProduct = {
  id: number
  title: string
  price: number
  descripiton: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const useFakeStore = defineStore('fashion', {
  state: () => ({
    data: [] as IDataProduct[],
  }),
  actions: {
    setData(data: IDataProduct[]): void {
      this.data = data
    },
  },
})
