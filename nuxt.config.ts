// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      pokeApi: 'https://pokeapi.co/api/v2/berry/',
      fakeStoreApi: 'https://fakestoreapi.com/products',
    },
  },
})
