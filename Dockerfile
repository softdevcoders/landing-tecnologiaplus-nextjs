#########################################
#   DEVELOPMENT STAGE
#########################################
FROM node:24.0.0-alpine AS development

RUN apk add --no-cache libc6-compat && \
    mkdir -p /app && \
    chown -R node:node /app

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN pnpm install

COPY --chown=node:node . .

USER node

CMD ["pnpm", "dev"]

#########################################
#   BUILD STAGE
#########################################

FROM node:24.0.0-alpine AS builder

RUN apk add --no-cache libc6-compat

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=node:node --from=development /app/node_modules ./node_modules
COPY --chown=node:node . .

ARG NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
ARG SHOULD_ROBOTS_INDEX

RUN echo "NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL" >> .env.production && \
    echo "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=$NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME" >> .env.production && \
    echo "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=$NEXT_PUBLIC_GOOGLE_ANALYTICS_ID" >> .env.production && \
    echo "SHOULD_ROBOTS_INDEX=$SHOULD_ROBOTS_INDEX" >> .env.production

RUN pnpm run build

USER node

#########################################
#   PRODUCTION STAGE
#########################################

FROM node:24.0.0-alpine AS production

RUN apk add --no-cache libc6-compat

# Install pnpm globally in the production stage
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

RUN chown -R nextjs:nodejs .next

USER nextjs
EXPOSE 3000

CMD ["pnpm", "run", "start"]