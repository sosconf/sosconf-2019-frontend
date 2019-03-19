FROM node:lts-alpine AS builder
ENV npm_config_unsafe_perm=true
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm install cnpm yarn -g && cnpm install create-react-app react-scripts -g && yarn install
RUN yarn add react && yarn add react-dom
RUN npm run build

FROM nginx:stable-alpine

LABEL \
  org.label-schema.schema-version="1.0" \
  org.label-schema.name="instantbox-frontend" \
  org.label-schema.vcs-url="https://github.com/instantbox/instantbox-frontend" \
  maintainer="Instantbox Team <team@instantbox.org>"

COPY --from=builder /app/build/ /var/build/

RUN mkdir -p /var/build/2019/
RUN cp -r /var/build/* /var/build/2019/ | true
RUN mkdir -p /etc/letsencrypt/live/sosconf.org/  /etc/letsencrypt/archive/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

ARG BUILD_DATE
ARG VCS_REF
LABEL \
  org.label-schema.build-date=$BUILD_DATE \
  org.label-schema.vcs-ref=$VCS_REF