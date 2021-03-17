# develop stage
FROM node:current-alpine3.10 as develop-stage
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY ./ .
# build stage
FROM develop-stage as build-stage
RUN npm run build
# production stage
FROM nginx:alpine as production-stage
RUN mkdir /frontend
COPY --from=build-stage /frontend/dist /frontend
COPY nginx.conf /etc/nginx/nginx.conf