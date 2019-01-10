FROM mhart/alpine-node:10.10 as base
WORKDIR /usr/src

COPY package-lock.json package.json ./
RUN npm i --no-save

COPY . .
RUN npm run build-storybook

FROM mhart/alpine-node:10.10
WORKDIR /public

COPY --from=base /usr/src/public /public
