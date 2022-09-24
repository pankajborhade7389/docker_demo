FROM node:14

WORKDIR /demodoc/app.js

COPY package*.json app.js

RUN npm install

EXPOSE 8000

CMD [ "node", "app.js" ]