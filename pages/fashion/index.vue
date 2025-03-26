<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Daftar Produk Fashion</h1>

    <ul role="list" class="flex flex-col gap-3">
      <DataTable v-if="!loading" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from '#app'
  import { useFakeStore } from '~/stores/fashion'

  import DataTable from '~/components/Fashion/DataTable.vue'

  definePageMeta({
    title: 'Fashion',
  })

  const store = useFakeStore()
  const config = useRuntimeConfig()
  const loading = ref(true)

  onMounted(async () => {
    try {
      const response = await fetch(config.public.fakeStoreApi)
      const data = await response.json()
      store.setData(data)
    } catch (error) {
      console.error('Error fetching data fashion:', error)
    } finally {
      loading.value = false
    }
  })
</script>
