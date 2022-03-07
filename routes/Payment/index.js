import { Router } from "express";
import mercadopago from "./mercadopago.js";
import paypal from "./paypal.js";

import dotenv from "dotenv";
dotenv.config();

const router = Router();

router.use("/mercadopago", mercadopago);
router.use("/paypal", paypal);

export default router;
