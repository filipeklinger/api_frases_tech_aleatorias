import { Request, Response } from "express";
import { CatRepository } from "../../repository/catRepository";

//controller class
export const showOk = async (req: Request, res: Response) => {
    res.json({ "status": "ok" });
};

export const catPhrase = async (req: Request, res: Response) => {
    const cRepo = new CatRepository();
    const fact = cRepo.getRandomPhrase();
    res.json({ fact: fact });
};