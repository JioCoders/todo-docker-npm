FROM ubuntu as build

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

FROM node as runner

EXPOSE 8000

CMD [ "npm", "start" ]
# ENTRYPOINT [ "node", "main.js" ]