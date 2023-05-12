import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const secret_key = process.env.SECRET_KEY;

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: 'Acesso não autorizado!' });
    }
    try {
        jwt.verify(token as string, secret_key!)
        next();
    } catch{
        res.status(401).json({ message: 'Acesso não autorizado!' });
    }
};

export default authMiddleware;