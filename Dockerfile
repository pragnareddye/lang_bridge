FROM node:alpine AS build-stage
RUN apk add bash
COPY package.json /lang_bridge_modules/
COPY package-lock.json /lang_bridge_modules/
WORKDIR /lang_bridge_modules
RUN npm install
COPY . /lang_bridge
WORKDIR /lang_bridge
RUN mv /lang_bridge_modules/node_modules /lang_bridge/
RUN npm run build

FROM scratch AS export-stage
COPY --from=build-stage /lang_bridge/build/www .