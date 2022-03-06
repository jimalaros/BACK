import Express from 'express';
import cors from 'cors';
import passport from 'passport';
import public_routes from './routes/public.js';
import payment_routes from './routes/Payment/index.js';
import rutasOrdenes from './routes/ordenes/ordenes.js';
import { conectarBD } from './db/basededatos.js'
//import rutasUsuarios from './routes/usuarios/rutas.js';
import auth_routes from './routes/auth/index.js';
import './services/index.js';

const whiteList = ['https://apicommerce.tk', 'https://api.apicommerce.tk']

const app = Express();
const port = process.env.PORT;

app.use(Express.json());
app.use(cors({ origin: whiteList }));
app.use(passport.initialize())

app.use("/ordenes", rutasOrdenes);
//app.use(rutasUsuarios);
app.use(payment_routes);
app.use(public_routes);
app.use(auth_routes);

const main = () => {
  return app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
  });
};

conectarBD(main);