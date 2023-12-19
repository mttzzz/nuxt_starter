module.exports = {
  apps: [
    {
      name: 'nuxt-starter',
      exec_mode: 'cluster',
      port: process.env.PORT,
      instances: 1,
      script: './.output/server/index.mjs',
    },
  ],
}
