# build stage
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build

# runtime stage
FROM nginx:stable-alpine as runtime

COPY --from=builder /app/dist /usr/share/nginx/html

# expose port and define CMD
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
