import { getDB } from "../db/basededatos.js";
import { Token } from "./inicioSesion.controller.js";

export const inicioSesion = async (datosUsuarios) => {
  const correo = datosUsuarios.correo;
  const contraseña = datosUsuarios.contraseña;
  const baseDeDatos = getDB();
  await baseDeDatos.collection("usuarios").findOne( { correo } )
  if (correo && contraseña) {
    const token = await Token(email, contraseña)
    res.status(200).json({ auth: true, token });
  }
};

export const newUser = async (datosUsuarios) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection("usuarios").insertOne(datosUsuarios);
};
