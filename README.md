# AI Solutions Platform

## Project Title: AI Connect Hub

## Brief Description

AI Connect Hub is an innovative platform designed to bridge the gap between businesses and readily available Artificial Intelligence solutions. In a market saturated with tools for building AI or automating specific tasks, AI Connect Hub offers a **curated marketplace and integration hub** for pre-packaged, plug-and-play AI solutions.

Our mission is to empower businesses, especially Small and Medium Businesses (SMBs), to rapidly discover, integrate, and activate AI capabilities into their existing operations with minimal technical effort. Forget complex development or deep data science knowledge; AI Connect Hub focuses on "connecting" and "activating" off-the-shelf AI products across various business functions like customer service, marketing, operations, and HR.

This MVP aims to provide:
*   A browseable catalog of example AI solutions.
*   User registration and authentication.
*   A simplified mechanism for users to "activate" and configure chosen AI solutions, demonstrating the plug-and-play integration concept.
*   A basic dashboard to view active integrations.

## Tech Stack

The AI Connect Hub is built with a modern, scalable, and developer-friendly tech stack, emphasizing TypeScript for robust development.

*   **Frontend:**
    *   **Next.js 14+**: React framework for building fast, SEO-friendly web applications with Server-Side Rendering (SSR) and Static Site Generation (SSG).
    *   **React 18+**: A declarative, component-based JavaScript library for building user interfaces.
    *   **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and developer experience.
    *   **Tailwind CSS**: A utility-first CSS framework for rapid UI development and consistent styling.
*   **Backend:**
    *   **Node.js 20+**: JavaScript runtime built on Chrome's V8 JavaScript engine.
    *   **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
    *   **TypeScript**: For strong typing and improved backend code maintainability.
    *   **TypeORM**: An ORM (Object-Relational Mapper) for TypeScript and JavaScript, used to interact with the database.
*   **Database:**
    *   **PostgreSQL**: A powerful, open-source relational database management system.
*   **Containerization:**
    *   **Docker**: For packaging applications and their dependencies into portable containers, ensuring consistent environments.
*   **Package Manager:**
    *   **PNPM**: A fast, disk space efficient package manager for JavaScript. Leveraged with Workspaces for monorepo management.
*   **Cloud Platform (Deployment Target):**
    *   **AWS**: The platform for hosting and scaling our services (ECS/Fargate, RDS, S3, etc.).

## Setup Instructions

Follow these steps to get AI Connect Hub up and running on your local machine for development.

### Prerequisites

*   Node.js (v20 or higher)
*   PNPM (v8 or higher)
*   Docker & Docker Compose (for database setup)
*   Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/ai-connect-hub.git
cd ai-connect-hub
```

### 2. Install Dependencies

This project uses PNPM Workspaces to manage dependencies across the monorepo.

```bash
pnpm install
```

### 3. Environment Variables

Create `.env` files based on the `.env.example` files in the root, `apps/frontend`, and `apps/backend` directories.

#### `.env` (root directory)

This file might contain global variables or variables for `docker-compose.yml`. For MVP, it primarily directs to the backend's .env.

```
# For future use or global configurations
```

#### `apps/frontend/.env`

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api # Adjust if your backend runs on a different port
```

#### `apps/backend/.env`

```
DATABASE_URL="postgresql://user:password@localhost:5432/ai_connect_db"
JWT_SECRET="your_jwt_secret_key_here" # Use a strong, random key in production
PORT=3001 # Or any other port
```
**Note**: Replace `user`, `password`, and `ai_connect_db` with your desired PostgreSQL credentials and database name. For `JWT_SECRET`, generate a strong, unique string.

### 4. Database Setup

We'll use Docker Compose to run a local PostgreSQL instance.

```bash
# From the project root
docker-compose up -d postgres
```
This will start a PostgreSQL container in the background.

### 5. Run Database Migrations

Once the PostgreSQL container is running, apply the database schema migrations.

```bash
# Navigate to the backend directory
cd apps/backend

# Install TypeORM globally if not already present (optional, or use npx)
# pnpm add -g typeorm

# Run migrations
pnpm typeorm migration:run

# Go back to the root directory
cd ../..
```

### 6. Start the Applications

Start both the backend and frontend applications.

#### Start Backend

```bash
# From the project root
cd apps/backend
pnpm start:dev
```
The backend server will typically run on `http://localhost:3001` (or the port specified in `apps/backend/.env`).

#### Start Frontend

Open a new terminal window.

```bash
# From the project root
cd apps/frontend
pnpm dev
```
The frontend application will typically run on `http://localhost:3000`.

You should now be able to access the application in your browser at `http://localhost:3000`.

### Running Tests

#### Backend Tests

```bash
cd apps/backend
pnpm test
pnpm test:e2e # For end-to-end tests
```

#### Frontend Tests

```bash
cd apps/frontend
pnpm test
```

### Deployment

The project is designed for deployment on AWS using Docker containers.
*   Frontend assets can be built (`pnpm build`) and served from an S3 bucket via CloudFront.
*   Backend and frontend (SSR) Docker images can be pushed to AWS ECR (Elastic Container Registry) and deployed using AWS ECS or AWS Fargate for scalable container orchestration.
*   Database services are managed via AWS RDS for PostgreSQL.
*   CI/CD workflows in `.github/workflows` provide automated testing and deployment.

For specific deployment instructions, refer to the `Dockerfile`s in `apps/frontend` and `apps/backend`, and the CI/CD configurations in `.github/workflows`.
