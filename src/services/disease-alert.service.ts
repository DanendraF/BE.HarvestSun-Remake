import prisma from '../config/prisma';

export const getAllDiseaseAlerts = async (farmId?: string) => {
  return await prisma.diseaseAlert.findMany({
    where: farmId ? { farmId } : undefined,
    include: { farm: true },
  });
};

export const getDiseaseAlertById = async (id: string) => {
  return await prisma.diseaseAlert.findUnique({
    where: { id },
    include: { farm: true },
  });
};

export const createDiseaseAlert = async (data: {
  farmId: string;
  diseaseName: string;
  severity: string;
  detectedAt?: Date | string;
  imageUrl?: string;
  status?: string;
  recommendation?: string;
}) => {
  return await prisma.diseaseAlert.create({
    data: {
      ...data,
      detectedAt: data.detectedAt ? new Date(data.detectedAt) : undefined,
    },
  });
};

export const updateDiseaseAlert = async (
  id: string,
  data: {
    diseaseName?: string;
    severity?: string;
    detectedAt?: Date | string;
    imageUrl?: string;
    status?: string;
    recommendation?: string;
  }
) => {
  return await prisma.diseaseAlert.update({
    where: { id },
    data: {
      ...data,
      detectedAt: data.detectedAt ? new Date(data.detectedAt) : undefined,
    },
  });
};

export const deleteDiseaseAlert = async (id: string) => {
  return await prisma.diseaseAlert.delete({
    where: { id },
  });
};
