FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npx tsc

CMD ["npx", "ts-node", "challenge-b/process.ts"]
