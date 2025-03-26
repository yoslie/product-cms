<template>
  <li
    v-for="(item, index) in berries"
    :key="index"
    class="flex items-center gap-[10px]"
  >
    <span class="text-blue-gray-900 font-medium">
      {{ index + 1 }}
    </span>
    <div
      class="flex h-[52px] w-full items-center justify-between rounded-xl border border-gray-300 px-4"
    >
      <div class="flex items-center justify-center gap-4">
        <p
          class="text-blue-gray-800 max-w-[500px] truncate text-sm font-medium"
        >
          {{ item.name || '-' }}
        </p>
      </div>

      <div class="flex h-5 gap-4">
        <UButton color="neutral" variant="outline">Detail</UButton>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
  const store = usePokeStore()
  const berries = computed(() => store.berries)
</script>
