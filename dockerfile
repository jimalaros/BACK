FROM node:16-alpine

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

#Install pm2
RUN npm i -g pm2@latest 

# Bundle app source
COPY . .

CMD ["node","index.js"]
