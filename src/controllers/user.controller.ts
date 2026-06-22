import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { role } = req.query;
    const users = await userService.getAllUsers(role as string);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, fullName, role, avatarUrl } = req.body;
    if (!email || !fullName || !role) {
      res.status(400).json({ error: 'Email, fullName, and role are required' });
      return;
    }
    const user = await userService.createUser({ email, password, fullName, role, avatarUrl });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateExistingUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { email, password, fullName, role, avatarUrl } = req.body;
    const user = await userService.updateUser(id, { email, password, fullName, role, avatarUrl });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const removeUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
