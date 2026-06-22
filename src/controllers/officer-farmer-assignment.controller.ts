import { Request, Response, NextFunction } from 'express';
import * as assignmentService from '../services/officer-farmer-assignment.service';

export const getAssignments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { officerId, farmerId } = req.query;
    const assignments = await assignmentService.getAllAssignments({
      officerId: officerId as string,
      farmerId: farmerId as string,
    });
    res.json(assignments);
  } catch (error) {
    next(error);
  }
};

export const getAssignmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const assignment = await assignmentService.getAssignmentById(id);
    if (!assignment) {
      res.status(404).json({ error: 'Assignment not found' });
      return;
    }
    res.json(assignment);
  } catch (error) {
    next(error);
  }
};

export const createNewAssignment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { officerId, farmerId } = req.body;
    if (!officerId || !farmerId) {
      res.status(400).json({ error: 'officerId and farmerId are required' });
      return;
    }
    const assignment = await assignmentService.createAssignment({
      officerId,
      farmerId,
    });
    res.status(201).json(assignment);
  } catch (error) {
    next(error);
  }
};

export const removeAssignment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await assignmentService.deleteAssignment(id);
    res.json({ message: 'Assignment removed successfully' });
  } catch (error) {
    next(error);
  }
};
