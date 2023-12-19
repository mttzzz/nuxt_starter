# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview

```

FORGE deploy SCRIPT:

```bash
cd /home/forge/example.com
git reset -- hard origin/$FORGE_SITE_BRANCH
git pull origin $FORGE_SITE_BRANCH
pnpm i
npx prisma generate
npx prisma migrate deploy
pnpm build 

sudo supervisorctl restart daemon-9999:daemon-9999_00
```