import * as config from "./config";
import { Connection, createConnection } from "typeorm";

export const init = async () => {
  let odb: Connection;

  try {
    odb = await createConnection(
      process.env.NODE_ENV === "production" ? config.prod : config.dev
    );
  } catch (err) {
    throw { err };
  }

  return odb;
};
