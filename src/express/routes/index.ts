import * as express from "express";

import app from "./_app";

export const init = async (App: express.Express) => {
  const router = express.Router();

  router.use("/app", app);

  App.use(router);
};
