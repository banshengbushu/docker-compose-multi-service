FROM node:alpine
WORKDIR /web
COPY package.json ./
RUN yarn install

COPY . ./
RUN yarn build
CMD ["npm", "start"]
