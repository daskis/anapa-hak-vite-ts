# Используем образ с Node.js для сборки проекта
FROM node:latest AS builder

# Установка рабочей директории внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package.json package-lock.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Собираем проект (сборка приложения)
RUN npm run build

# Подготавливаем production-версию приложения
FROM nginx:latest

# Копируем собранные файлы приложения из билд-стейджа
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80 для обращения к веб-серверу
EXPOSE 3000

# Запускаем NGINX при запуске контейнера
CMD ["nginx", "-g", "daemon off;"]
