FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g sequelize-cli

COPY . .

EXPOSE 3005

CMD ["sh", "-c", "sequelize-cli db:migrate && node index.js"]