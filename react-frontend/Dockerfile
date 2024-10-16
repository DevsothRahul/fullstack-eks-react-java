FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
RUN npm run build

# Use a lightweight web server to serve the build files
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose the port NGINX is running on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]