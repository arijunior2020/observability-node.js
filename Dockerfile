# Usa uma imagem oficial do Node.js como imagem base
FROM node:14-slim

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Instala as dependências do Node.js, incluindo o prom-client
RUN npm install express prom-client

# Copia os arquivos do diretório atual para o contêiner em /app
COPY . .

# Expõe a porta 5000 para o mundo exterior do contêiner
EXPOSE 5000

# Executa o app.js quando o contêiner é iniciado
CMD ["node", "app.js"]
