# Etap 1: build
FROM node:18-alpine AS builder

ARG REACT_APP_API_TOKEN
ENV REACT_APP_API_TOKEN=$REACT_APP_API_TOKEN

# curl w Alpine
RUN apk add --no-cache curl

# Pobranie i instalacja tailwindcss CLI (standalone)
RUN curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 && \
    chmod +x tailwindcss-linux-x64 && \
    mv tailwindcss-linux-x64 /usr/local/bin/tailwindcss

WORKDIR /app

COPY app/package*.json ./
RUN npm install



COPY app/ .

COPY .env.prod .env

RUN npm run build

# Etap 2: serwer produkcyjny
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
