# Install
FROM node:10.16.3-alpine as react-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Production environment
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]