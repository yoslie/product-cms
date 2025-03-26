<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Daftar Berry</h1>

    <ul role="list" class="flex flex-col gap-3">
      <DataTable v-if="!loading" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from '#app'
  import { usePokeStore } from '~/stores/berries'

  import DataTable from '~/components/Berries/DataTable.vue'

  definePageMeta({
    title: 'Berries',
  })

  const store = usePokeStore()
  const config = useRuntimeConfig()
  const loading = ref(true)

  onMounted(async () => {
    try {
      const response = await fetch(config.public.pokeApi)
      const data = await response.json()
      store.setBerries(data.results)
    } catch (error) {
      console.error('Error fetching berries:', error)
    } finally {
      loading.value = false
    }
  })
</script>
