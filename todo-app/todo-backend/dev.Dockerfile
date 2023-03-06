FROM node:16-alpine

WORKDIR /usr/src/backend

COPY . .

RUN npm install

CMD npm run dev