import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';


interface UserPayload {
    id: String;
    email: String;
}


declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}


const currentUser = (req: Request, res: Response, next: NextFunction) => {
    if ( ! req.session?.jwt ) {
        return next();
    }
    try {
        req.currentUser = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    } catch (e) {
        console.log(e);
    }
    next();
};

export default currentUser;
