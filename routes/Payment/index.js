import { Router } from "express";
import mercadopago from "./mercadopago.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

//const paypal = require ('./paypal.js')

router.use("/mercadopago", mercadopago);
//router.use('/paypal', paypal);

export default router;
