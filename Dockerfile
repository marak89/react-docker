# Etap 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/ .
RUN npm run build

# Etap 2: serwer produkcyjny
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
