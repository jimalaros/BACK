import { getDB } from "../db/basededatos.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config.js";

export async function Token(email, password) {
  const usuario = await baseDeDatos.collection("usuarios").findOne( { correo: email } );
  const baseDeDatos = getDB();
  if (!usuario) {
    await baseDeDatos.collection("usuarios").insertOne( { correo: email, contraseña: password } );
  } else {
    const contraseña = bcrypt.compare(password, usuario.contraseña);
    if (contraseña) {
      const token = jwt.sign({ id: usuario._id }, config.secret, {
        expiresIn: 60 * 60 * 24,
      });
      return token;
    } else {
      console.log("Las contraseñas no coinciden");
    }
  }
}
