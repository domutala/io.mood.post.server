import * as express from "express";
import functions from "../functions";
import middlewares from "../middlewares";

const router = express.Router();

router.post("/init", functions.session.init);
router.post("/login", [middlewares.session.login], functions.session.login);
router.post(
  "/get_my_user",
  [middlewares.is_logged],
  functions.session.get_my_user
);

export default router;
