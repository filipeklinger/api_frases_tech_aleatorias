import { Request, Response } from "express";

//controller class
export const showOk = async (req: Request, res: Response) => {
    res.json({ "status": "ok" });
};