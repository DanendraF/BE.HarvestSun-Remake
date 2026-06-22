import prisma from '../config/prisma';

export const getAllDiseases = async () => {
  return await prisma.disease.findMany();
};

export const getDiseaseById = async (id: string) => {
  return await prisma.disease.findUnique({
    where: { id },
  });
};

export const createDisease = async (data: {
  name: string;
  symptoms?: string;
  severity: string;
}) => {
  return await prisma.disease.create({
    data,
  });
};

export const updateDisease = async (
  id: string,
  data: {
    name?: string;
    symptoms?: string;
    severity?: string;
  }
) => {
  return await prisma.disease.update({
    where: { id },
    data,
  });
};

export const deleteDisease = async (id: string) => {
  return await prisma.disease.delete({
    where: { id },
  });
};
