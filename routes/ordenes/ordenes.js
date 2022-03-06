import { Router } from "express";
import { ordenes, crearOrden } from "../../controllers/ordenes.js";

const router = Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error consultando los Ventas");
  } else {
    res.json(result);
  }
};

router.route("/").get((req, res) => {
  console.log("alguien hizo get en la ruta /ordenes");
  ordenes(genericCallback(res));
});

router.route("/nuevas").post((req, res) => {
  console.log("alguien hizo post en la ruta /ordenes/nuevas");
  crearOrden(req.body);
});

export default router;
