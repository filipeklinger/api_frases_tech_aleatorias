import { Request, Response } from "express";
import { CatModule } from "./catModule";
import { DogModule } from "./dogModule";

//controller class
export const showOk = async (req: Request, res: Response) => {
    res.json({ "status": "ok" });
};

export const catPhrase = async (req: Request, res: Response) => {
    const filter = <unknown>req.query as { id: number };
    const catModule = new CatModule();
    const response = catModule.getPhrase(filter);
    res.json(response);
};

export const dogPhrase = async (req: Request, res: Response) => {
    const filter = <unknown>req.query as { id: number };
    const catModule = new DogModule();
    const response = catModule.getPhrase(filter);
    res.json(response);
};