FROM node

RUN mkdir -p /api
WORKDIR /api

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . /api
RUN yarn typeorm migration:run

CMD ["yarn", "start"]
