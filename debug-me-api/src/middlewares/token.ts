import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

function verifyToken(req: Request, res: Response, next: NextFunction){
    const token = req.headers['x-access-token'] as string;
    if (!token) return res.status(401).json({ detail: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded: any) {
        if (err)
            return res.status(500).json({ detail: 'Failed to authenticate token.' });
        req.session.userId = decoded.id;
        next();
    });
}

export default verifyToken;