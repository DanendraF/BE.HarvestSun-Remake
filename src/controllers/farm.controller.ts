import { Request, Response, NextFunction } from 'express';
import * as farmService from '../services/farm.service';

export const getFarms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.query;
    const farms = await farmService.getAllFarms(userId as string);
    res.json(farms);
  } catch (error) {
    next(error);
  }
};

export const getFarmById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const farm = await farmService.getFarmById(id);
    if (!farm) {
      res.status(404).json({ error: 'Farm not found' });
      return;
    }
    res.json(farm);
  } catch (error) {
    next(error);
  }
};

export const createNewFarm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, name, location, size, latitude, longitude, cropType, status, healthScore } = req.body;
    if (!userId || !name || size === undefined) {
      res.status(400).json({ error: 'userId, name, and size (hectares) are required' });
      return;
    }
    const farm = await farmService.createFarm({
      userId,
      name,
      location,
      size: Number(size),
      latitude: latitude !== undefined ? Number(latitude) : undefined,
      longitude: longitude !== undefined ? Number(longitude) : undefined,
      cropType,
      status,
      healthScore: healthScore !== undefined ? Number(healthScore) : undefined,
    });
    res.status(201).json(farm);
  } catch (error) {
    next(error);
  }
};

export const updateExistingFarm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, location, size, latitude, longitude, cropType, status, healthScore } = req.body;
    const farm = await farmService.updateFarm(id, {
      name,
      location,
      size: size !== undefined ? Number(size) : undefined,
      latitude: latitude !== undefined ? Number(latitude) : undefined,
      longitude: longitude !== undefined ? Number(longitude) : undefined,
      cropType,
      status,
      healthScore: healthScore !== undefined ? Number(healthScore) : undefined,
    });
    res.json(farm);
  } catch (error) {
    next(error);
  }
};

export const removeFarm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await farmService.deleteFarm(id);
    res.json({ message: 'Farm deleted successfully' });
  } catch (error) {
    next(error);
  }
};
