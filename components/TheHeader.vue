<template>
  <header
    class="flex h-[72px] w-full items-center justify-between bg-blue-700 px-6"
  >
    <h1 class="font-roboto mr-4 text-xl font-bold text-white">
      {{ pageTitle }}
    </h1>

    <div class="mr-2 flex gap-4">
      <img
        :src="userAvatar"
        alt="user avatar"
        width="34"
        height="34"
        class="h-[34px] w-[34px] max-w-full rounded-full border-2 border-blue-300 bg-gray-500 object-cover object-center"
      />
      <UButton class="inline-flex w-full items-center">
        <span
          class="font-lato text-blue-gray-800 mr-2 line-clamp-1 max-w-[100px] text-left text-sm font-semibold text-white"
        >
          Username
        </span>
      </UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
  const userAvatar = 'https://placehold.co/34'
  const route = useRoute()

  const pageTitle = computed(() => {
    return route.meta?.title
  })
</script>
