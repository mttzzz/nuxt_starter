module.exports = {
  apps: [
    {
      name: 'nuxt-starter',
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs',
      env: {
        port: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
      },
    },
  ],
}
