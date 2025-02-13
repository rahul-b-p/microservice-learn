FROM node:v22.11.0

WORKDIR /user

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "npm","start" ]