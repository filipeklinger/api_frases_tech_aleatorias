import { Router } from "express";
import * as cors from 'cors';
import * as numberController from "../modules/numbers";
import * as animalController from "../modules/animals";

const router = Router();

router.options('*', cors());
router.get('/', function (req, res) {
    res.send({ msg: 'OK' });
});

router.get('/numbers', numberController.showOk);

router.get('/animals', animalController.showOk);
router.get('/animals/cat', animalController.catPhrase);
export default router;