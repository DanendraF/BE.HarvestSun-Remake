import prisma from '../config/prisma';

export const getAllOfficerProfiles = async () => {
  return await prisma.officerProfile.findMany({
    include: { user: true },
  });
};

export const getOfficerProfileById = async (id: string) => {
  return await prisma.officerProfile.findUnique({
    where: { id },
    include: { user: true },
  });
};

export const createOfficerProfile = async (data: {
  userId: string;
  region?: string;
  performanceScore?: number;
  status?: string;
}) => {
  return await prisma.officerProfile.create({
    data,
  });
};

export const updateOfficerProfile = async (
  id: string,
  data: {
    region?: string;
    performanceScore?: number;
    status?: string;
  }
) => {
  return await prisma.officerProfile.update({
    where: { id },
    data,
  });
};

export const deleteOfficerProfile = async (id: string) => {
  return await prisma.officerProfile.delete({
    where: { id },
  });
};
