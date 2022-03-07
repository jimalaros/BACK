import Express from "express";
import expressJwt from "express-jwt";
import cors from "cors";
import passport from "passport";
import public_routes from "./routes/public.js";
import payment_routes from "./routes/Payment/index.js";
import rutasOrdenes from "./routes/ordenes/ordenes.js";
import { conectarBD } from "./db/basededatos.js";
import rutasUsuarios from "./routes/usuarios.routes.js";
import auth_routes from "./routes/auth/index.js";
import config from "./config.js";
import "./services/index.js";

const whiteList = ["https://apicommerce.tk", "https://api.apicommerce.tk"];

const app = Express();
const port = process.env.PORT;

app.use(Express.json());
app.use(cors({ origin: whiteList }));
app.use(passport.initialize());

app.use(auth_routes);
app.use(payment_routes);
app.use(public_routes);

app.use(
  expressJwt({
    secret: config.secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/Login", "/Registro"],
  })
);

app.use("/", rutasUsuarios);

app.use((err, req, res, _next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json("Token invalido");
  } else {
    res.status(500).json("Internal server error");
  }
});

app.use("/ordenes", rutasOrdenes);

const main = () => {
  return app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
  });
};

conectarBD(main);