FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app


# Установка Supervisor
RUN apt-get update &&  apt-get install -y supervisor
  

# Установка зависимостей
RUN pnpm install




RUN npx prisma generate

# Сборка приложения
RUN pnpm build



# Копирование entrypoint.sh и установка прав на выполнение
COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000/tcp

# Установка entrypoint
ENTRYPOINT ["/entrypoint.sh"]

