// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: { typedPages: true },
  modules: ['@bg-dev/nuxt-naiveui', '@unocss/nuxt', '@pinia/nuxt', '@nuxt/eslint'],

  imports: {
    dirs: ['stores'],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-09-03',
})
