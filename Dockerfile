# Use node image as base image
FROM node:18-alpine as base

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

FROM base as production

# Set environment variables
ENV WEATHER_API_KEY=84c7ddb2b41f32a05cb8c31c5a2f7505
ENV NODE_ENV=production
ENV PORT=4000

# Expose the port the app runs on
EXPOSE 4000

USER node

# Set the command to start the node server
CMD [ "npm", "start" ]
# ENTRYPOINT [ "node", "main.js" ]