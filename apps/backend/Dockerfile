# Stage 1: Build the NestJS application
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml for dependency caching
COPY package.json pnpm-lock.yaml ./ 
COPY apps/backend/package.json apps/backend/package.json
COPY apps/backend/nest-cli.json apps/backend/nest-cli.json
COPY apps/backend/tsconfig.json apps/backend/tsconfig.json

# Install dependencies for the backend workspace
RUN pnpm install --filter=./apps/backend

# Copy the rest of the backend source code
COPY apps/backend/src apps/backend/src

# Build the NestJS application
RUN pnpm --filter=./apps/backend build

# Stage 2: Run the NestJS application
FROM node:20-alpine AS runner

WORKDIR /app

# ENV NODE_ENV production

# Copy production dependencies from builder stage
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/apps/backend/dist /app/apps/backend/dist
COPY --from=builder /app/apps/backend/package.json /app/apps/backend/package.json

# Set current working directory to the backend app
WORKDIR /app/apps/backend

# Expose the port NestJS runs on
EXPOSE ${PORT}

# Command to run the application
CMD ["node", "dist/main"]
