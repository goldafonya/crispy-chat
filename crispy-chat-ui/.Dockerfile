FROM node:10.16.3-alpine AS node

RUN apk update && apk upgrade && apk add python2 make gcc && rm -rf /var/lib/apt/lists/*

WORKDIR /ui

COPY package.json .

RUN yarn install

COPY . .

RUN pwd
RUN ls

RUN yarn run build

RUN rm -rf node_modules

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/template

COPY --from=node /ui/build /nginx/html

CMD envsubst '$PROXY_URL' < /etc/nginx/conf.d/template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'

EXPOSE 8080
