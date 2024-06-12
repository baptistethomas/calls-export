FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["sh", "-c", "yarn run seed && yarn start:dev"]