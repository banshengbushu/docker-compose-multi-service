FROM node:alpine
WORKDIR /web
COPY package.json ./
RUN if [ "$NODE_ENV" = "development" ]; \
	then yarn install;  \
	else yarn install --only=production; \
	fi
COPY . ./
CMD ["npm", "start"]
