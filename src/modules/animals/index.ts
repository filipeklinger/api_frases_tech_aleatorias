import { Request, Response } from "express";
import { CatModule } from "./catModule";
import { DogModule } from "./dogModule";

//controller class
export const showAnimals = async (req: Request, res: Response) => {
    res.json(["cat", "dog"]);
};

export const catFacts = async (req: Request, res: Response) => {
    const filter = <unknown>req.query as { id: number };
    const catModule = new CatModule();
    const response = catModule.getFact(filter);
    res.json(response);
};

export const dogFacts = async (req: Request, res: Response) => {
    const filter = <unknown>req.query as { id: number };
    const catModule = new DogModule();
    const response = catModule.getFact(filter);
    res.json(response);
};