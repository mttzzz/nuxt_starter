// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@bg-dev/nuxt-naiveui', '@unocss/nuxt', '@pinia/nuxt'],
  imports: {
    dirs: ['stores'],
  },
})
