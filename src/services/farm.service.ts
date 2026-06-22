import prisma from '../config/prisma';

export const getAllFarms = async (userId?: string) => {
  return await prisma.farm.findMany({
    where: userId ? { userId } : undefined,
    include: {
      user: true,
      crops: true,
      activities: true,
      diseaseAlerts: true,
    },
  });
};

export const getFarmById = async (id: string) => {
  return await prisma.farm.findUnique({
    where: { id },
    include: {
      user: true,
      crops: true,
      activities: true,
      diseaseAlerts: true,
    },
  });
};

export const createFarm = async (data: {
  userId: string;
  name: string;
  location?: string;
  size: number;
  cropType?: string;
  status?: string;
  healthScore?: number;
}) => {
  return await prisma.farm.create({
    data,
  });
};

export const updateFarm = async (
  id: string,
  data: {
    name?: string;
    location?: string;
    size?: number;
    cropType?: string;
    status?: string;
    healthScore?: number;
  }
) => {
  return await prisma.farm.update({
    where: { id },
    data,
  });
};

export const deleteFarm = async (id: string) => {
  return await prisma.farm.delete({
    where: { id },
  });
};
