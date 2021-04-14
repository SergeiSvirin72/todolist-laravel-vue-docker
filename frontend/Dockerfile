# build stage
FROM node:current-alpine3.10 as build-stage
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
# production stage
FROM nginx:alpine as production-stage
RUN mkdir /frontend
COPY --from=build-stage /frontend/dist /frontend
COPY nginx.conf /etc/nginx/nginx.conf