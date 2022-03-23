import * as data from "./data";
import * as server from "./server";

(async () => {
  try {
    await data.init();
    await server.init();
  } catch (error) {
    console.log(error);
  }
})();
