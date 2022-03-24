import * as server from "./server";
import * as data from "./data";
import * as controllers from "./controllers";

(async () => {
  try {
    await data.init();
    const _server = await server.init();

    await controllers.init(_server.app);
  } catch (error) {
    console.log(error);
  }
})();
