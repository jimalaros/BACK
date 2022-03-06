FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm i -g pm2@latest

COPY . .

CMD ["pm2-runtime","start","index.js","--env","--watch"]
