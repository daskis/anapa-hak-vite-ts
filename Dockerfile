# Используем образ Node.js для разработки
FROM node:latest AS development

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Установка зависимостей проекта
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Запускаем проект в режиме разработки (ваша команда для запуска dev-сервера)
CMD ["npm", "run", "dev"]
