import prisma from '../config/prisma';

export const getAllActivities = async (farmId?: string) => {
  return await prisma.activity.findMany({
    where: farmId ? { farmId } : undefined,
    include: { farm: true },
  });
};

export const getActivityById = async (id: string) => {
  return await prisma.activity.findUnique({
    where: { id },
    include: { farm: true },
  });
};

export const createActivity = async (data: {
  farmId: string;
  type: string;
  description?: string;
  date: Date | string;
  status?: string;
  cost?: number;
}) => {
  return await prisma.activity.create({
    data: {
      ...data,
      date: new Date(data.date),
    },
  });
};

export const updateActivity = async (
  id: string,
  data: {
    type?: string;
    description?: string;
    date?: Date | string;
    status?: string;
    cost?: number;
  }
) => {
  return await prisma.activity.update({
    where: { id },
    data: {
      ...data,
      date: data.date ? new Date(data.date) : undefined,
    },
  });
};

export const deleteActivity = async (id: string) => {
  return await prisma.activity.delete({
    where: { id },
  });
};
