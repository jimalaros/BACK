import { getDB } from "../db/basededatos.js";

export const ordenes = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection("ordenes").find({}).limit(50).toArray(callback);
};

export const crearOrden = async (datosOrdenes) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection("ordenes").insertOne(datosOrdenes);
};
