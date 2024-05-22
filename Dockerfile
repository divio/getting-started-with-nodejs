FROM node:20.13.1

ENV NODE_PATH=/app/node_modules

WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY . /app

EXPOSE 80

CMD ["npm", "start"]
