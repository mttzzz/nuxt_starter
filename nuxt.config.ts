import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { typeCheck: true },
  ssr: true,
  devtools: { enabled: false },
  experimental: { typedPages: true, viewTransition: true },
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@nuxt/eslint', 'nuxtjs-naive-ui', 'nuxt-cron'],
  cron: {
    runOnInit: false,
    timeZone: 'Europe/Minsk',
    jobsDir: 'cron',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
              'createDiscreteApi',
            ],
          },
        ],
        dts: '../types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: '../types/components.d.ts',
      }),
    ],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-08-13',
  future: {
    compatibilityVersion: 4,
  },
})
