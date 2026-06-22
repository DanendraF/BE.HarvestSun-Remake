import { Request, Response, NextFunction } from 'express';
import * as farmerProfileService from '../services/farmer-profile.service';

export const getFarmerProfiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profiles = await farmerProfileService.getAllFarmerProfiles();
    res.json(profiles);
  } catch (error) {
    next(error);
  }
};

export const getFarmerProfileById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const profile = await farmerProfileService.getFarmerProfileById(id);
    if (!profile) {
      res.status(404).json({ error: 'Farmer profile not found' });
      return;
    }
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const createNewFarmerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, phone, location, performanceScore, status } = req.body;
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }
    const profile = await farmerProfileService.createFarmerProfile({
      userId,
      phone,
      location,
      performanceScore,
      status,
    });
    res.status(201).json(profile);
  } catch (error) {
    next(error);
  }
};

export const updateExistingFarmerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { phone, location, performanceScore, status } = req.body;
    const profile = await farmerProfileService.updateFarmerProfile(id, {
      phone,
      location,
      performanceScore,
      status,
    });
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const removeFarmerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await farmerProfileService.deleteFarmerProfile(id);
    res.json({ message: 'Farmer profile deleted successfully' });
  } catch (error) {
    next(error);
  }
};
