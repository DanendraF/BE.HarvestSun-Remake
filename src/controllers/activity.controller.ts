import { Request, Response, NextFunction } from 'express';
import * as activityService from '../services/activity.service';

export const getActivities = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { farmId } = req.query;
    const activities = await activityService.getAllActivities(farmId as string);
    res.json(activities);
  } catch (error) {
    next(error);
  }
};

export const getActivityById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const activity = await activityService.getActivityById(id);
    if (!activity) {
      res.status(404).json({ error: 'Activity not found' });
      return;
    }
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export const createNewActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { farmId, type, description, date, status, cost } = req.body;
    if (!farmId || !type || !date) {
      res.status(400).json({ error: 'farmId, type, and date are required' });
      return;
    }
    const activity = await activityService.createActivity({
      farmId,
      type,
      description,
      date,
      status,
      cost: cost !== undefined ? Number(cost) : undefined,
    });
    res.status(201).json(activity);
  } catch (error) {
    next(error);
  }
};

export const updateExistingActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { type, description, date, status, cost } = req.body;
    const activity = await activityService.updateActivity(id, {
      type,
      description,
      date,
      status,
      cost: cost !== undefined ? Number(cost) : undefined,
    });
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export const removeActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await activityService.deleteActivity(id);
    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    next(error);
  }
};
