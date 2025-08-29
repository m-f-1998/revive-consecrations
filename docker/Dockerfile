# Stage 1: Build the application
FROM node:slim as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json files and install all dependencies
# The --chown flag ensures correct file permissions for the 'node' user
COPY --chown=node:node client/package*.json client/
COPY --chown=node:node server/package*.json server/
RUN npm install

# Copy all source code
COPY --chown=node:node . .

# Build the frontend and server (replace with your actual build command)
RUN cd client && npm run build

# Stage 2: The Final Runtime Stage
FROM node:slim

RUN mkdir -p /home/node
RUN chown -R node:node /home/node

WORKDIR /node

# Copy server output
COPY --chown=node:node --from=builder server/dist /node/server
COPY --chown=node:node --from=builder server/package*.json /node/server

# Copy Angular dist
COPY --chown=node:node client/dist/browser /node/client

RUN apt-get update && apt-get install -y --no-install-recommends nano

# Set a non-root user (optional, good practice)
USER node

# Install production dependencies
WORKDIR /node/server
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["node", "index.js"]
