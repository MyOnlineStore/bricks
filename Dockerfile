FROM mhart/alpine-node:10.10 as base
WORKDIR /usr/src

COPY yarn.lock package.json ./
RUN yarn --ignore-scripts

COPY . .
RUN yarn build-storybook

FROM mhart/alpine-node:10.10
WORKDIR /public

COPY --from=base /usr/src/public /public
