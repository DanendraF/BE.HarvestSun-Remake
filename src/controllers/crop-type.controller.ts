import { Request, Response, NextFunction } from 'express';
import * as cropTypeService from '../services/crop-type.service';

export const getCropTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cropTypes = await cropTypeService.getAllCropTypes();
    res.json(cropTypes);
  } catch (error) {
    next(error);
  }
};

export const getCropTypeById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const cropType = await cropTypeService.getCropTypeById(id);
    if (!cropType) {
      res.status(404).json({ error: 'Crop type not found' });
      return;
    }
    res.json(cropType);
  } catch (error) {
    next(error);
  }
};

export const createNewCropType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, variety, season } = req.body;
    if (!name) {
      res.status(400).json({ error: 'name is required' });
      return;
    }
    const cropType = await cropTypeService.createCropType({ name, variety, season });
    res.status(201).json(cropType);
  } catch (error) {
    next(error);
  }
};

export const updateExistingCropType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, variety, season } = req.body;
    const cropType = await cropTypeService.updateCropType(id, { name, variety, season });
    res.json(cropType);
  } catch (error) {
    next(error);
  }
};

export const removeCropType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await cropTypeService.deleteCropType(id);
    res.json({ message: 'Crop type deleted successfully' });
  } catch (error) {
    next(error);
  }
};
