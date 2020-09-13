FROM node:14-alpine

WORKDIR /app

COPY dist/ .
COPY package.json package.json

RUN yarn install

ARG JWT_SECRET
ARG MONGO_DB_URL

ENV NODE_ENV production
ENV MONGO_DB_URL $MONGO_DB_URL
ENV JWT_SECRET $JWT_SECRET

EXPOSE 3000

CMD ["node", "src/main.js"]
