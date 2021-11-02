FROM node:alpine
WORKDIR /usr/share/nginx/html

COPY build/. .
RUN yarn global add serve

CMD serve -s .
