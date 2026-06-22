import { Request, Response, NextFunction } from 'express';
import * as recommendationService from '../services/recommendation.service';

export const getRecommendations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { officerId, farmerId } = req.query;
    const recommendations = await recommendationService.getAllRecommendations({
      officerId: officerId as string,
      farmerId: farmerId as string,
    });
    res.json(recommendations);
  } catch (error) {
    next(error);
  }
};

export const getRecommendationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const recommendation = await recommendationService.getRecommendationById(id);
    if (!recommendation) {
      res.status(404).json({ error: 'Recommendation not found' });
      return;
    }
    res.json(recommendation);
  } catch (error) {
    next(error);
  }
};

export const createNewRecommendation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { officerId, farmerId, message, sent } = req.body;
    if (!officerId || !farmerId || !message) {
      res.status(400).json({ error: 'officerId, farmerId, and message are required' });
      return;
    }
    const recommendation = await recommendationService.createRecommendation({
      officerId,
      farmerId,
      message,
      sent,
    });
    res.status(201).json(recommendation);
  } catch (error) {
    next(error);
  }
};

export const updateExistingRecommendation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { message, sent } = req.body;
    const recommendation = await recommendationService.updateRecommendation(id, {
      message,
      sent,
    });
    res.json(recommendation);
  } catch (error) {
    next(error);
  }
};

export const removeRecommendation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await recommendationService.deleteRecommendation(id);
    res.json({ message: 'Recommendation deleted successfully' });
  } catch (error) {
    next(error);
  }
};
