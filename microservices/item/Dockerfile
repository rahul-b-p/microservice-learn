FROM node:22.11.0

WORKDIR /item

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 6000

CMD [ "npm","start" ]