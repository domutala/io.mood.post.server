import * as dotenv from "dotenv";
import * as db from "../src/data";

(async () => {
  dotenv.config();
  const _db = await db.init();

  await _db.close();
})();
