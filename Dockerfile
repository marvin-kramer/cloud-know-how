FROM node:latest as build-stage

COPY . /cloud-know-how
WORKDIR /cloud-know-how
RUN npm install && npm run build

FROM nginxinc/nginx-unprivileged:latest

COPY --from=build-stage /cloud-know-how/build/ /usr/share/nginx/html
