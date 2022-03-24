import * as express from "express";

import session from "./_session";

export const init = async (App: express.Express) => {
  const router = express.Router();

  router.use("/session", session);

  App.use(router);
};
