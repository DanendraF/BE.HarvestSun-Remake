# HarvestSun Backend ⚙️

Welcome to the backend repository for **HarvestSun**, a smart agriculture platform designed to empower farmers and agricultural officers with robust REST APIs, intelligent analytics, and seamless master data management.

## 🚀 Overview

The HarvestSun backend is built to provide scalable, secure, and fast API services for the frontend applications. It manages authentication, farm and crop data tracking, daily activity logging, and intelligent disease monitoring, leveraging PostgreSQL as the primary database.

### Core Modules
- **🔐 Authentication & Authorization**: Secure user management for different roles (Farmers, Officers, Dinas).
- **🌱 Farm Management**: CRUD operations for farms, crops, and logging agricultural activities.
- **📚 Master Data**: Pre-seeded data for crop types, varieties, and activity categories.
- **🚨 Disease Intelligence**: API endpoints to manage disease alerts and automated recommendations.

## 💻 Tech Stack

- **Framework**: [Express.js](https://expressjs.com/) (Node.js)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (Hosted on [Supabase](https://supabase.com/))
- **Validation**: Zod
- **Security**: JSON Web Tokens (JWT), bcrypt

## 🛠️ Getting Started

Follow these steps to run the backend service locally:

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- PostgreSQL Database instance (e.g., Supabase)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DanendraF/BE.HarvestSun-Remake.git
   cd BE.HarvestSun-Remake
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following keys:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"
   JWT_SECRET="your_super_secret_jwt_key"
   ```

4. **Initialize the Database**
   Push the database schema and apply seed data:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Test the API**
   The server will start on `http://localhost:5000` (or the PORT defined in `.env`).

## 📂 Project Structure

- `/src/controllers`: Request handlers for various endpoints.
- `/src/services`: Business logic layer.
- `/src/routes`: API route definitions.
- `/src/middlewares`: Custom middleware for auth, error handling, and validation.
- `/prisma`: Prisma schema definitions and database seeding scripts (`schema.prisma`, `seed.ts`).
- `/src/generated/prisma`: Custom Prisma client output directory.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
