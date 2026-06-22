import prisma from '../config/prisma';

export const getAllRecommendations = async (filter?: { officerId?: string; farmerId?: string }) => {
  return await prisma.recommendation.findMany({
    where: filter,
    include: {
      officer: { include: { user: true } },
      farmer: { include: { user: true } },
    },
  });
};

export const getRecommendationById = async (id: string) => {
  return await prisma.recommendation.findUnique({
    where: { id },
    include: {
      officer: { include: { user: true } },
      farmer: { include: { user: true } },
    },
  });
};

export const createRecommendation = async (data: {
  officerId: string;
  farmerId: string;
  message: string;
  sent?: boolean;
}) => {
  return await prisma.recommendation.create({
    data,
  });
};

export const updateRecommendation = async (
  id: string,
  data: {
    message?: string;
    sent?: boolean;
  }
) => {
  return await prisma.recommendation.update({
    where: { id },
    data,
  });
};

export const deleteRecommendation = async (id: string) => {
  return await prisma.recommendation.delete({
    where: { id },
  });
};
