FROM  node:22-alpine as base

WORKDIR /app
COPY package.json  ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base as builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY ./ ./
RUN yarn run build

FROM  node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder  /app/.next/standalone ./
COPY --from=builder  /app/.next/static ./.next/static
COPY --from=builder  /app/next.config.js ./next.config.js
COPY --from=builder  /app/postcss ./postcss

CMD ["node", "./server.js"]
