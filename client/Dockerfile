FROM node:lts

WORKDIR /app/client

COPY package.json .
RUN npm install
COPY . .
CMD [ "npm" , "run", "dev"]