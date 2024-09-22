# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila TypeScript
RUN npm run build

# Expone el puerto que utiliza tu aplicación
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
