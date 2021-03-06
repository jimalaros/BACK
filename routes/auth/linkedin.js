import { Router } from "express";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

const strategy_name = "linkedin";

router.get(
  `/${strategy_name}/auth`,
  passport.authenticate(strategy_name, { session: false, scope: ['r_liteprofile', 'r_emailaddress'] })
);

router.get(
  `/${strategy_name}/callback`,
  passport.authenticate(strategy_name, {
    session: false,
    failureRedirect: "/failed",
  }),
  function (req, res) {
    const data = req.user._json;
    res.json({ msg: `Peticion get /${strategy_name}/callback `, data });
    /**const token = "hgjsd8fs6g7s7df67g6sdf43sdg2s3df5sg6s7df7";

    const url_front = process.env.URL_FRONT + `/?token=${token}`;

    res.redirect(301, url_front);**/
  }
);

export default router;
