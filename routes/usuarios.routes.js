import { Router } from "express";
import { inicioSesion, newUser } from "../../controllers/ordenes.js";

const router = Router();

router.route("/Login").post((req, res) => {
  inicioSesion(req.body);
});

router.route("/Registro").post((req, res) => {
  newUser(req.body);
});

export default router;
