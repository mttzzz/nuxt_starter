# Этап сборки
FROM node:20-alpine as builder

WORKDIR /app

# Установка pnpm
RUN npm install -g pnpm


COPY package.json pnpm-lock.yaml prisma ./


# Установка зависимостей
RUN pnpm i

# Копирование исходного кода проекта
COPY . .

# Сборка приложения
RUN pnpm build

# Генерация клиента Prisma
RUN pnpm prisma generate

# Этап продакшена
FROM node:20-alpine as prod

WORKDIR /app

RUN npm install prisma

COPY --from=builder /app/node_modules/@prisma /app/node_modules/@prisma
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/prisma /app/prisma

EXPOSE 3000
CMD sh -c "npx prisma migrate deploy && node /app/.output/server/index.mjs"
