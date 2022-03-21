import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as os from "os";

import * as routes from "./routes";
import * as middlewares from "./middlewares";
import fileUpload = require("express-fileupload");
import * as socket from "../socket";

export const init = async (conf = { port: 6060 }) => {
  const app = express();

  // config
  app.use(cors());
  app.use(bodyParser.json({}));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());

  middlewares.init(app);
  routes.init(app);

  app.get("/", (req, res) => {
    res.send("sfdsfsdf");
    console.log(process.env.NODE_ENV);
  });

  const server = http.createServer(app);
  await socket.init(server);

  // listen
  const port = process.env.PORT || conf.port;
  server.listen(port);

  const networkInterfaces = os.networkInterfaces();

  // console.clear();
  console.log("\x1b[0m", "");
  console.log(
    "\x1b[0m",
    "     running on:",
    "\x1b[33m",
    `http://localhost:${port}`
  );

  for (const name in networkInterfaces) {
    if (Object.prototype.hasOwnProperty.call(networkInterfaces, name)) {
      const networkInterface = networkInterfaces[name];

      if (networkInterface) {
        for (const net of networkInterface) {
          if (net.family === "IPv4" && !net.internal) {
            console.log(
              "\x1b[0m",
              "     running on:",
              "\x1b[33m",
              `http://${net.address}:${port}`
            );
          }
        }
      }
    }
  }

  console.log("\x1b[0m", "");

  return server;
};
