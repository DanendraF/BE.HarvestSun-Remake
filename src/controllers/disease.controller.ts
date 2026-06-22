import { Request, Response, NextFunction } from 'express';
import * as diseaseService from '../services/disease.service';

export const getDiseases = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const diseases = await diseaseService.getAllDiseases();
    res.json(diseases);
  } catch (error) {
    next(error);
  }
};

export const getDiseaseById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const disease = await diseaseService.getDiseaseById(id);
    if (!disease) {
      res.status(404).json({ error: 'Disease not found' });
      return;
    }
    res.json(disease);
  } catch (error) {
    next(error);
  }
};

export const createNewDisease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, symptoms, severity } = req.body;
    if (!name || !severity) {
      res.status(400).json({ error: 'name and severity are required' });
      return;
    }
    const disease = await diseaseService.createDisease({ name, symptoms, severity });
    res.status(201).json(disease);
  } catch (error) {
    next(error);
  }
};

export const updateExistingDisease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, symptoms, severity } = req.body;
    const disease = await diseaseService.updateDisease(id, { name, symptoms, severity });
    res.json(disease);
  } catch (error) {
    next(error);
  }
};

export const removeDisease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await diseaseService.deleteDisease(id);
    res.json({ message: 'Disease deleted successfully' });
  } catch (error) {
    next(error);
  }
};
