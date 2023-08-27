FROM node:18-alpine as builder
WORKDIR /my-space

COPY package.json yarn.lock ./
# RUN npm install -g yarn
# RUN npm ci
RUN ["yarn", "install"]
COPY . .
# RUN npm run build
RUN ["yarn", "build"]

FROM node:18-alpine as runner
WORKDIR /my-space
COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/yarn.lock .
COPY --from=builder /my-space/next.config.js ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static
COPY --from=builder /my-space/node_modules ./node_modules
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
