import { CustomError } from './custom-error';
import { HttpStatusCode } from 'axios';

class UnauthorizedError extends CustomError {
    statusCode = HttpStatusCode.Unauthorized;

    constructor() {
        super('Not authorized');
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    serializeErrors(): { message: string; field?: string }[] {
        return [ { message: 'Not Authorized' } ];
    }

}

export default UnauthorizedError;
