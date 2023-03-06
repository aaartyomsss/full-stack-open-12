FROM node:16-alpine

WORKDIR /usr/src/backend

COPY . .

RUN npm install

ENV NODE_ENV=production

CMD npm start