import * as dotenv from "dotenv";
import * as db from "../src/db";
import funcs from "../src/functions";
import { User } from "../src/db/entities/User";

(async () => {
  dotenv.config();
  const _db = await db.init();

  const user = new User();
  user.name = "Aminata Sy";
  user.phone = "00221777063025";

  await funcs.user.create(user);

  await _db.close();
})();
