import { Router } from "express";
import pkg from "mercadopago";
import dotenv from "dotenv";

const router = Router();
const { configure, preferences } = pkg;

dotenv.config();

// Agrega credenciales
configure({
  access_token: process.env.MERCADOPAGO_TOKEN,
});

router.post("/pago", async function (req, res) {
  console.log("New request POST to /pago");

  const user = {
    name: "Andrea",
    last_name: "Campanella",
    email: "andrea@campanella.com",
  };

  /**let items = [];

  for (let index = 0; index < names.length; index++) {
    items[index] = ordenes[index];
  }
  console.log(items);**/

  // Crea un objeto de preferencia
  let preference = {
    auto_return: "approved",
    back_urls: {
      success: `${process.env.URL_BACK}/success`, // TODO: define this
      failure: `${process.env.URL_BACK}/failure`, // TODO: define this
      pending: `${process.env.URL_BACK}/pending`, // TODO: define this
    },
    payer: {
      name: user.name,
      surname: user.last_name,
      email: user.email,
    },
    items: req.body.items,
  };

  // petición a mercado pago para preparar la compra
  preferences
    .create(preference)
    .then(function (response) {
      // Ok, haga el proceso de pago con este id:
      console.log(response);
      let id = response.body.id;
      res.json({ preference_id: id, url: response.body.sandbox_init_point });
    })
    .catch(function (error) {
      console.log(error);
    });
});

export default router;
