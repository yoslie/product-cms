<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
  const store = useFakeStore()

  const data = computed(() => store.data)
</script>
