<template>
  <div
    class="relative flex h-screen min-w-0 grid-cols-[260px,1fr] overflow-hidden"
  >
    <TheSidebar />
    <div class="w-full max-w-[calc(100vw-260px)]">
      <TheHeader />
      <main
        class="h-[calc(100vh-72px)] w-full overflow-y-auto bg-white px-6 py-[14px]"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TheHeader from '~/components/TheHeader.vue'
  import TheSidebar from '~/components/TheSidebar.vue'
</script>
