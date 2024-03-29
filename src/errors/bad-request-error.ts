import { CustomError } from './custom-error';
import { HttpStatusCode } from 'axios';

export class BadRequestError extends CustomError {
    statusCode = HttpStatusCode.BadRequest;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [ { 'message': this.message } ];
    }


}