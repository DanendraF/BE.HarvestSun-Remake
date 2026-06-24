import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'agrilink_super_secret_key_123!';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, fullName, role, avatarUrl, profileData } = req.body;

    if (!email || !password || !fullName || !role) {
      res.status(400).json({ error: 'Email, password, fullName, and role are required' });
      return;
    }

    // Check if role is valid
    const validRoles = ['farmer', 'officer', 'dinas', 'admin'];
    if (!validRoles.includes(role)) {
      res.status(400).json({ error: 'Invalid role. Choose from: farmer, officer, dinas, admin' });
      return;
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ error: 'Email is already registered' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and profile in a transaction
    const user = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          fullName,
          role,
          avatarUrl,
        },
      });

      if (role === 'farmer') {
        let phone = null;
        let location = null;
        if (profileData) {
          phone = profileData.phone;
          const regency = profileData.regency ? `${profileData.regency}, ` : '';
          const district = profileData.district ? `${profileData.district}, ` : '';
          const detail = profileData.location || '';
          location = `${district}${regency}${detail}`.trim();
          if (location.endsWith(',')) location = location.slice(0, -1);
        }

        await tx.farmerProfile.create({
          data: {
            userId: createdUser.id,
            status: 'active',
            phone,
            location,
          },
        });
      } else if (role === 'officer') {
        await tx.officerProfile.create({
          data: {
            userId: createdUser.id,
            status: 'active',
          },
        });
      }

      return createdUser;
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        full_name: user.fullName,
        role: user.role,
        avatar_url: user.avatarUrl,
        created_at: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ error: 'Email atau password salah' });
      return;
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Email atau password salah' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        full_name: user.fullName,
        role: user.role,
        avatar_url: user.avatarUrl,
        created_at: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Assuming auth middleware attached user payload to request
    const userId = (req as any).user?.id;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json({
      user: {
        id: user.id,
        email: user.email,
        full_name: user.fullName,
        role: user.role,
        avatar_url: user.avatarUrl,
        created_at: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
