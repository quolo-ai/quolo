import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user';

export const checkPermissions = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.user; // Assuming user is added to req object

    if (user.role.permissions.includes(requiredPermission)) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  };
};