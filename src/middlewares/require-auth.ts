import { NextFunction, Request, Response } from 'express';
import UnauthorizedError from '../errors/unauthorized-error';

const requireAuth = (req: Request, res: Response, next: NextFunction) => {

    if ( ! req.currentUser ) {
        throw new UnauthorizedError();
    }

    console.log('Authorized');
    next();
};

export default requireAuth;
