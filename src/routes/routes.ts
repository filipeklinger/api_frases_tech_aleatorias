import { Router } from "express";
import * as cors from 'cors';

const router = Router();

router.options('*', cors());
router.get('/', function (req, res) {
    throw new Error("teste");

    res.send({ msg: 'GET request to homepage' });
});
export default router;