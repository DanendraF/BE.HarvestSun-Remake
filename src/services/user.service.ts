import bcrypt from 'bcryptjs';
import prisma from '../config/prisma';

export const getAllUsers = async (role?: string) => {
  return await prisma.user.findMany({
    where: role ? { role } : undefined,
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      avatarUrl: true,
      createdAt: true,
      farmerProfile: true,
      officerProfile: true,
    },
  });
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      avatarUrl: true,
      createdAt: true,
      farmerProfile: true,
      officerProfile: true,
    },
  });
};

export const createUser = async (data: {
  email: string;
  fullName: string;
  password?: string;
  role: string;
  avatarUrl?: string;
}) => {
  const hashedPassword = data.password 
    ? await bcrypt.hash(data.password, 10)
    : await bcrypt.hash('password123', 10); // fallback password
    
  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });

  // Omit password from returned object
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const updateUser = async (
  id: string,
  data: {
    email?: string;
    fullName?: string;
    password?: string;
    role?: string;
    avatarUrl?: string;
  }
) => {
  const updatedData: any = { ...data };
  if (data.password) {
    updatedData.password = await bcrypt.hash(data.password, 10);
  }
  const user = await prisma.user.update({
    where: { id },
    data: updatedData,
  });

  // Omit password from returned object
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};
