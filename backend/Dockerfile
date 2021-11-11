FROM node:alpine
WORKDIR /app

COPY package.json .
RUN yarn --prod
RUN echo 'test'

COPY . .
CMD yarn start
