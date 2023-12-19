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
cd $FORGE_SITE_PATH
git reset -- hard origin/$FORGE_SITE_BRANCH
git pull origin $FORGE_SITE_BRANCH
pnpm i
npx prisma generate
npx prisma migrate deploy
pnpm build

pm2 delete "$FORGE_SITE_ID" 2>&1 || :

PORT=$PORT DATABASE_URL=$DATABASE_URL pm2 start '.output/server/index.mjs' --name "$FORGE_SITE_ID" -- --watch

```

Apply Prisma migrations:

```bash
npx prisma migrate dev --name changePostTitle
```

