import { Request, Response, NextFunction } from 'express';
import * as officerProfileService from '../services/officer-profile.service';

export const getOfficerProfiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profiles = await officerProfileService.getAllOfficerProfiles();
    res.json(profiles);
  } catch (error) {
    next(error);
  }
};

export const getOfficerProfileById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const profile = await officerProfileService.getOfficerProfileById(id);
    if (!profile) {
      res.status(404).json({ error: 'Officer profile not found' });
      return;
    }
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const createNewOfficerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, region, performanceScore, status } = req.body;
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }
    const profile = await officerProfileService.createOfficerProfile({
      userId,
      region,
      performanceScore,
      status,
    });
    res.status(201).json(profile);
  } catch (error) {
    next(error);
  }
};

export const updateExistingOfficerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { region, performanceScore, status } = req.body;
    const profile = await officerProfileService.updateOfficerProfile(id, {
      region,
      performanceScore,
      status,
    });
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const removeOfficerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await officerProfileService.deleteOfficerProfile(id);
    res.json({ message: 'Officer profile deleted successfully' });
  } catch (error) {
    next(error);
  }
};
