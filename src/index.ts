/**
 * Agrilink Backend Server
 * 
 * CARA MENJALANKAN DATABASE (PRISMA):
 * 1. Pastikan PostgreSQL atau Supabase sudah berjalan dan buat database bernama `agrilink`.
 * 2. Konfigurasikan URL koneksi database di file `.env` pada variabel `DATABASE_URL`.
 * 3. Jalankan migrasi database agar skema tabel terbuat di database:
 *    `npx prisma migrate dev --name init`
 * 4. Generate ulang Prisma Client jika ada perubahan skema:
 *    `npx prisma generate`
 * 5. (Opsional) Jalankan script sql manual di folder `/sql` atau gunakan prisma studio untuk mengisi data:
 *    `npx prisma studio`
 */

import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes';
import prisma from './config/prisma';
import { errorHandler } from './middlewares/error.middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Swagger Docs Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', apiRoutes);

// Basic sanity check route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Agrilink Backend API is running!' });
});

// Example route testing Prisma connection status
app.get('/health', async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'OK', database: 'Connected' });
  } catch (error) {
    res.status(500).json({ status: 'Error', database: 'Disconnected', error: String(error) });
  }
});

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
