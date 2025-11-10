FROM node:20-alpine AS dev

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose Vite default dev port
EXPOSE 5173

# Start the Vite dev server
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]
