import prisma from '../config/prisma';

export const getAllAssignments = async (filter?: { officerId?: string; farmerId?: string }) => {
  return await prisma.officerFarmerAssignment.findMany({
    where: filter,
    include: {
      officer: { include: { user: true } },
      farmer: { include: { user: true } },
    },
  });
};

export const getAssignmentById = async (id: string) => {
  return await prisma.officerFarmerAssignment.findUnique({
    where: { id },
    include: {
      officer: { include: { user: true } },
      farmer: { include: { user: true } },
    },
  });
};

export const createAssignment = async (data: {
  officerId: string;
  farmerId: string;
}) => {
  return await prisma.officerFarmerAssignment.create({
    data,
  });
};

export const deleteAssignment = async (id: string) => {
  return await prisma.officerFarmerAssignment.delete({
    where: { id },
  });
};
