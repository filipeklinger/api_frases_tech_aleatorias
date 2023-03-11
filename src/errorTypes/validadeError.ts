import { HttpError } from "./httpError";

export class ValidateError extends HttpError {
    constructor(message: string) {
        super(message, 400, "validate-error");
    }
}