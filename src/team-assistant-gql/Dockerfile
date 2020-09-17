FROM node:14-alpine

WORKDIR /app

COPY deploy/ .

ARG JWT_SECRET
ARG MONGO_DB_URL

ENV NODE_ENV production
ENV MONGO_DB_URL $MONGO_DB_URL
ENV JWT_SECRET $JWT_SECRET

EXPOSE 3000

WORKDIR /app/src/team-assistant-gql/dist

CMD ["node", "src/main.js"]
