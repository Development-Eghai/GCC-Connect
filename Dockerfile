FROM node:18 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# If your app is using a subdirectory like GCC-Connect, ensure it's properly set
# Add this if you're using create-react-app and need a subdirectory
ENV PUBLIC_URL=/

RUN npm run build

# Serve React app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Create custom nginx configuration for the container
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
