import prisma from '../config/prisma';

export const getAllFarmerProfiles = async (officerId?: string) => {
  return await prisma.farmerProfile.findMany({
    where: officerId ? {
      assignments: {
        some: { officerId }
      }
    } : undefined,
    include: { 
      user: {
        include: { farms: true }
      } 
    },
  });
};

export const getFarmerProfileById = async (id: string) => {
  return await prisma.farmerProfile.findUnique({
    where: { id },
    include: { 
      user: {
        include: { farms: true }
      } 
    },
  });
};

export const createFarmerProfile = async (data: {
  userId: string;
  phone?: string;
  location?: string;
  performanceScore?: number;
  status?: string;
}) => {
  return await prisma.farmerProfile.create({
    data,
  });
};

export const updateFarmerProfile = async (
  id: string,
  data: {
    phone?: string;
    location?: string;
    performanceScore?: number;
    status?: string;
  }
) => {
  return await prisma.farmerProfile.update({
    where: { id },
    data,
  });
};

export const deleteFarmerProfile = async (id: string) => {
  return await prisma.farmerProfile.delete({
    where: { id },
  });
};
