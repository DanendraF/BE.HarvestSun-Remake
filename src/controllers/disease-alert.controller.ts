import { Request, Response, NextFunction } from 'express';
import * as diseaseAlertService from '../services/disease-alert.service';

export const getDiseaseAlerts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { farmId } = req.query;
    const alerts = await diseaseAlertService.getAllDiseaseAlerts(farmId as string);
    res.json(alerts);
  } catch (error) {
    next(error);
  }
};

export const getDiseaseAlertById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const alert = await diseaseAlertService.getDiseaseAlertById(id);
    if (!alert) {
      res.status(404).json({ error: 'Disease alert not found' });
      return;
    }
    res.json(alert);
  } catch (error) {
    next(error);
  }
};

export const createNewDiseaseAlert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { farmId, diseaseName, severity, detectedAt, imageUrl, status, recommendation } = req.body;
    if (!farmId || !diseaseName || !severity) {
      res.status(400).json({ error: 'farmId, diseaseName, and severity are required' });
      return;
    }
    const alert = await diseaseAlertService.createDiseaseAlert({
      farmId,
      diseaseName,
      severity,
      detectedAt,
      imageUrl,
      status,
      recommendation,
    });
    res.status(201).json(alert);
  } catch (error) {
    next(error);
  }
};

export const updateExistingDiseaseAlert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { diseaseName, severity, detectedAt, imageUrl, status, recommendation } = req.body;
    const alert = await diseaseAlertService.updateDiseaseAlert(id, {
      diseaseName,
      severity,
      detectedAt,
      imageUrl,
      status,
      recommendation,
    });
    res.json(alert);
  } catch (error) {
    next(error);
  }
};

export const removeDiseaseAlert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await diseaseAlertService.deleteDiseaseAlert(id);
    res.json({ message: 'Disease alert deleted successfully' });
  } catch (error) {
    next(error);
  }
};
