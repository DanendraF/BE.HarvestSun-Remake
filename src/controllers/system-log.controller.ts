import { Request, Response, NextFunction } from 'express';
import * as systemLogService from '../services/system-log.service';

export const getLogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { level } = req.query;
    const logs = await systemLogService.getAllLogs(level as string);
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

export const getLogById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const log = await systemLogService.getLogById(id);
    if (!log) {
      res.status(404).json({ error: 'System log not found' });
      return;
    }
    res.json(log);
  } catch (error) {
    next(error);
  }
};

export const createNewLog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { level, message, source, timestamp } = req.body;
    if (!level || !message) {
      res.status(400).json({ error: 'level and message are required' });
      return;
    }
    const log = await systemLogService.createLog({ level, message, source, timestamp });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};

export const removeLog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await systemLogService.deleteLog(id);
    res.json({ message: 'System log deleted successfully' });
  } catch (error) {
    next(error);
  }
};
