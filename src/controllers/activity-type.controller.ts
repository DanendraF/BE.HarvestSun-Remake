import { Request, Response, NextFunction } from 'express';
import * as activityTypeService from '../services/activity-type.service';

export const getActivityTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const activityTypes = await activityTypeService.getAllActivityTypes();
    res.json(activityTypes);
  } catch (error) {
    next(error);
  }
};

export const getActivityTypeById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const activityType = await activityTypeService.getActivityTypeById(id);
    if (!activityType) {
      res.status(404).json({ error: 'Activity type not found' });
      return;
    }
    res.json(activityType);
  } catch (error) {
    next(error);
  }
};

export const createNewActivityType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, category, icon } = req.body;
    if (!name) {
      res.status(400).json({ error: 'name is required' });
      return;
    }
    const activityType = await activityTypeService.createActivityType({ name, category, icon });
    res.status(201).json(activityType);
  } catch (error) {
    next(error);
  }
};

export const updateExistingActivityType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, category, icon } = req.body;
    const activityType = await activityTypeService.updateActivityType(id, { name, category, icon });
    res.json(activityType);
  } catch (error) {
    next(error);
  }
};

export const removeActivityType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await activityTypeService.deleteActivityType(id);
    res.json({ message: 'Activity type deleted successfully' });
  } catch (error) {
    next(error);
  }
};
