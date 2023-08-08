FROM node:18
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY index.js .

ENTRYPOINT ["node", "index.js"]
