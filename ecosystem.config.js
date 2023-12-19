module.exports = {
  apps: [
    {
      name: 'nuxt-starter',
      exec_mode: 'cluster',
      instances: 1,
      script: 'env-cmd node ./.output/server/index.mjs',
    },
  ],
}
