import { NextFunction, Request, Response } from "express";

export function requestLogger(req: Request, res: Response, next: NextFunction) {

    function afterResponse() {
        res.removeListener('finish', afterResponse);
        // action after response
        console.log(new Date().toISOString(), " [", req.method, "] ", req.path, " ", res.statusCode);
    }

    res.on('finish', afterResponse);

    // action before request
    // eventually calling `next()`
    next();
}