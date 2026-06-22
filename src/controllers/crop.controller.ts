import { Request, Response, NextFunction } from 'express';
import * as cropService from '../services/crop.service';

export const getCrops = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { farmId } = req.query;
    const crops = await cropService.getAllCrops(farmId as string);
    res.json(crops);
  } catch (error) {
    next(error);
  }
};

export const getCropById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const crop = await cropService.getCropById(id);
    if (!crop) {
      res.status(404).json({ error: 'Crop not found' });
      return;
    }
    res.json(crop);
  } catch (error) {
    next(error);
  }
};

export const createNewCrop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { farmId, name, variety, plantingDate, expectedHarvest, growthStage, healthStatus, progress } = req.body;
    if (!farmId || !name || !plantingDate) {
      res.status(400).json({ error: 'farmId, name, and plantingDate are required' });
      return;
    }
    const crop = await cropService.createCrop({
      farmId,
      name,
      variety,
      plantingDate,
      expectedHarvest,
      growthStage,
      healthStatus,
      progress: progress !== undefined ? Number(progress) : undefined,
    });
    res.status(201).json(crop);
  } catch (error) {
    next(error);
  }
};

export const updateExistingCrop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, variety, plantingDate, expectedHarvest, growthStage, healthStatus, progress } = req.body;
    const crop = await cropService.updateCrop(id, {
      name,
      variety,
      plantingDate,
      expectedHarvest,
      growthStage,
      healthStatus,
      progress: progress !== undefined ? Number(progress) : undefined,
    });
    res.json(crop);
  } catch (error) {
    next(error);
  }
};

export const removeCrop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await cropService.deleteCrop(id);
    res.json({ message: 'Crop deleted successfully' });
  } catch (error) {
    next(error);
  }
};
