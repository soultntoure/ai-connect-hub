# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml for dependency caching
COPY package.json pnpm-lock.yaml ./ 
COPY apps/frontend/package.json apps/frontend/package.json
COPY apps/frontend/tsconfig.json apps/frontend/tsconfig.json
COPY apps/frontend/next.config.mjs apps/frontend/next.config.mjs
COPY apps/frontend/postcss.config.js apps/frontend/postcss.config.js
COPY apps/frontend/tailwind.config.ts apps/frontend/tailwind.config.ts
COPY apps/frontend/.env apps/frontend/.env

# Install dependencies for the frontend workspace
RUN pnpm install --filter=./apps/frontend

# Copy the rest of the frontend source code
COPY apps/frontend/src apps/frontend/src
COPY apps/frontend/public apps/frontend/public

# Build the Next.js application
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm --filter=./apps/frontend build

# Stage 2: Serve the Next.js application
FROM node:20-alpine AS runner

WORKDIR /app

# ENV NODE_ENV production
ENV PORT 3000

# Copy production dependencies from builder stage
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/apps/frontend/.next /app/apps/frontend/.next
COPY --from=builder /app/apps/frontend/public /app/apps/frontend/public
COPY --from=builder /app/apps/frontend/package.json /app/apps/frontend/package.json

# Set current working directory to the frontend app
WORKDIR /app/apps/frontend

# Expose the port Next.js runs on
EXPOSE ${PORT}

# Start the Next.js production server
CMD ["pnpm", "start"]