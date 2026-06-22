import prisma from '../config/prisma';

export const getAllActivityTypes = async () => {
  return await prisma.activityType.findMany();
};

export const getActivityTypeById = async (id: string) => {
  return await prisma.activityType.findUnique({
    where: { id },
  });
};

export const createActivityType = async (data: {
  name: string;
  category?: string;
  icon?: string;
}) => {
  return await prisma.activityType.create({
    data,
  });
};

export const updateActivityType = async (
  id: string,
  data: {
    name?: string;
    category?: string;
    icon?: string;
  }
) => {
  return await prisma.activityType.update({
    where: { id },
    data,
  });
};

export const deleteActivityType = async (id: string) => {
  return await prisma.activityType.delete({
    where: { id },
  });
};
