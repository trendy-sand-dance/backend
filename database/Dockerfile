# Stage 1: BUILD
FROM node:22-slim AS build-stage

WORKDIR /app/database

COPY package.json package-lock.json tsconfig.json ./

RUN npm install -D 

COPY . .

ARG LISTEN_ADDRESS="0.0.0.0"
ARG LISTEN_PORT=8000

ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}

RUN npm run build

# Stage 2: FIGHT (production)
FROM node:22-slim AS production

WORKDIR /app/database

COPY --from=build-stage /app/database/package*.json ./

RUN npm install --only=production

COPY --from=build-stage /app/database/dist ./dist

CMD ["npm", "run", "start"]


# Stage 2: EXPERIMENT (development)
FROM build-stage AS development

CMD ["npm", "run", "dev"]
