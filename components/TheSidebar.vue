<template>
  <aside
    class="sidebar z-10 flex h-screen max-w-[260px] flex-col gap-8 bg-blue-600 p-6"
  >
    <section>
      <NuxtLink to="/">
        <img
          src="/logo/logo-ipsum.png"
          alt="Product Management Logo"
          width="175"
          height="138"
          class="mb-1"
        />
        <h1
          class="font-lato text-sm leading-5 font-bold whitespace-nowrap text-white"
        >
          PRODUCT MANAGEMENT
        </h1>
      </NuxtLink>
    </section>

    <nav class="sidebar__navigation-container relative overflow-y-auto">
      <template v-for="navigation in NAVIGATION_MENU" :key="navigation.label">
        <UAccordion
          :items="[
            {
              label: navigation.label,
              defaultOpen: route.fullPath.startsWith(navigation.link),
            },
          ]"
        >
          <template #default>
            <UButton
              class="font-lato w-full gap-x-3 bg-transparent p-[15px] text-sm font-bold text-white"
              color="secondary"
            >
              <template #leading>
                <Icon
                  :name="navigation.icon"
                  style="color: white"
                  class="mr-3"
                />
              </template>
              <span>{{ navigation.label }}</span>
            </UButton>
          </template>
          <template #body>
            <nav
              class="ml-6 flex flex-1 flex-col border-l border-l-white/50 pl-4"
            >
              <NuxtLink
                v-for="child in navigation.children"
                :key="child.link"
                :to="child.link"
                class="sidebar__navigation-item font-lato flex min-h-[40px] items-center gap-x-3 rounded-lg px-0 py-[15px] text-sm font-bold text-white hover:bg-blue-700"
              >
                <span class="ml-3">{{ child.label }}</span>
              </NuxtLink>
            </nav>
          </template>
        </UAccordion>
      </template>
    </nav>
  </aside>
</template>

<script setup lang="ts">
  import { NAVIGATION_MENU } from '~/common/constant/navigation'

  const route = useRoute()
</script>
