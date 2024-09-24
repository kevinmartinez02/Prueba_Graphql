# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto de los archivos del proyecto
COPY . .

# Compila TypeScript
RUN npm run build

# Copiar Prisma
COPY prisma ./prisma

# Genera el cliente de Prisma
RUN npx prisma generate

# Expone el puerto que utiliza tu aplicación
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]