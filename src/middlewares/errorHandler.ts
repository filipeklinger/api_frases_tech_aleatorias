import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errorTypes/httpError";

export function errorHandler(error: Error | undefined, req: Request, res: Response, next: NextFunction) {
    if (!error) {
        next();
        return;
    }
    const parsed = errorParser(error);
    console.error(parsed.stack);
    console.log(parsed.body);

    if (res.headersSent) { return next(parsed); }
    if (error) {
        res.status(parsed.statusCode).send(parsed.body);
        return;
    }
}

function errorParser(error: unknown) {
    if (error instanceof HttpError) {
        return error;
    }

    return HttpError.FromError(error);
}