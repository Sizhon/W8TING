import {NextFunction, Request, Response} from "express";

export const checkNameFields = (req: Request, res: Response, next: NextFunction) => {
    const requiredFields = ['name'];

    for (const field of requiredFields) {
        if (req.body[field] === undefined) {
            res.status(400).json({ message: `${field} is required` });
            return;
        }
    }
    next();
}

export const checkAssignedNumberFields = (req: Request, res: Response, next: NextFunction) => {
    const requiredFields = ['assigned_number'];

    for (const field of requiredFields) {
        if (req.body[field] === undefined) {
            res.status(400).json({ message: `${field} is required` });
            return;
        }
    }
    next();
}