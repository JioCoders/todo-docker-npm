FROM node:18-alpine as base

WORKDIR /app

# COPY package.json package.json
# COPY package-lock.json package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

FROM base as runner

ENV PORT=4000
EXPOSE 4000

USER node

CMD [ "npm", "start" ]
# ENTRYPOINT [ "node", "main.js" ]