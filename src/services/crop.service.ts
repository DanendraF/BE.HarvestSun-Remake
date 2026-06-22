import prisma from '../config/prisma';

export const getAllCrops = async (farmId?: string) => {
  return await prisma.crop.findMany({
    where: farmId ? { farmId } : undefined,
    include: { farm: true },
  });
};

export const getCropById = async (id: string) => {
  return await prisma.crop.findUnique({
    where: { id },
    include: { farm: true },
  });
};

export const createCrop = async (data: {
  farmId: string;
  name: string;
  variety?: string;
  plantingDate: Date | string;
  expectedHarvest?: Date | string;
  growthStage?: string;
  healthStatus?: string;
  progress?: number;
}) => {
  return await prisma.crop.create({
    data: {
      ...data,
      plantingDate: new Date(data.plantingDate),
      expectedHarvest: data.expectedHarvest ? new Date(data.expectedHarvest) : undefined,
    },
  });
};

export const updateCrop = async (
  id: string,
  data: {
    name?: string;
    variety?: string;
    plantingDate?: Date | string;
    expectedHarvest?: Date | string;
    growthStage?: string;
    healthStatus?: string;
    progress?: number;
  }
) => {
  return await prisma.crop.update({
    where: { id },
    data: {
      ...data,
      plantingDate: data.plantingDate ? new Date(data.plantingDate) : undefined,
      expectedHarvest: data.expectedHarvest ? new Date(data.expectedHarvest) : undefined,
    },
  });
};

export const deleteCrop = async (id: string) => {
  return await prisma.crop.delete({
    where: { id },
  });
};
