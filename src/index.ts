import * as dotenv from "dotenv";
import * as db from "./db";
import * as server from "./express";

(async () => {
  dotenv.config();

  db.init()
    .then(() => server.init({ port: 6070 }))
    .catch((error) => {
      console.log(error);
    });
})();
