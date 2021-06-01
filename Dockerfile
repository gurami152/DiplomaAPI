FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . /app

EXPOSE 3000

CMD node index.js
 