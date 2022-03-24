import * as dotenv from "dotenv";
import * as db from "../src/data";

(async () => {
  dotenv.config();
  const _db = await db.init();

  const serviceAccount = require("./../firbase.json");

  console.log(serviceAccount);

  await _db.close();
})();
