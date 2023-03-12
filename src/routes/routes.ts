import { Router } from "express";
import * as cors from 'cors';
import * as numberController from "../modules/numbers";
import * as animalController from "../modules/animals";
import { asyncHandler } from "../middlewares/asyncHandler";

const router = Router();

router.options('*', cors());
router.get('/', function (req, res) {
    res.send({ msg: 'OK' });
});

router.get('/numbers', asyncHandler(numberController.showOk));

router.get('/animals', asyncHandler(animalController.showAnimals));
router.get('/animals/cat', asyncHandler(animalController.catFacts));
router.get('/animals/dog', asyncHandler(animalController.dogFacts));
export default router;