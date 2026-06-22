import prisma from '../config/prisma';

export const getAllLogs = async (level?: string) => {
  return await prisma.systemLog.findMany({
    where: level ? { level } : undefined,
    orderBy: { timestamp: 'desc' },
  });
};

export const getLogById = async (id: string) => {
  return await prisma.systemLog.findUnique({
    where: { id },
  });
};

export const createLog = async (data: {
  level: string;
  message: string;
  source?: string;
  timestamp?: Date | string;
}) => {
  return await prisma.systemLog.create({
    data: {
      ...data,
      timestamp: data.timestamp ? new Date(data.timestamp) : undefined,
    },
  });
};

export const deleteLog = async (id: string) => {
  return await prisma.systemLog.delete({
    where: { id },
  });
};
