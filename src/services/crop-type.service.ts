import prisma from '../config/prisma';

export const getAllCropTypes = async () => {
  return await prisma.cropType.findMany();
};

export const getCropTypeById = async (id: string) => {
  return await prisma.cropType.findUnique({
    where: { id },
  });
};

export const createCropType = async (data: {
  name: string;
  variety?: string;
  season?: string;
}) => {
  return await prisma.cropType.create({
    data,
  });
};

export const updateCropType = async (
  id: string,
  data: {
    name?: string;
    variety?: string;
    season?: string;
  }
) => {
  return await prisma.cropType.update({
    where: { id },
    data,
  });
};

export const deleteCropType = async (id: string) => {
  return await prisma.cropType.delete({
    where: { id },
  });
};
