import { MongoClient } from "mongodb";

import dotenv from "dotenv";
dotenv.config();

const stringConexion = process.env.DATABASE_URL;

const client = new MongoClient(stringConexion, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let baseDeDatos;

const conectarBD = (callback) => {
  client.connect((err, db) => {
    if (!err) {
      baseDeDatos = db.db("PROYECTO");
      console.log("Conectado con exito a la base de datos");
      return callback();
    } else {
      console.error(err);
      return "error";
    }
  });
};

const getDB = () => {
  return baseDeDatos;
};

export { conectarBD, getDB };
