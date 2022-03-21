import * as http from "http";
import * as socketIo from "socket.io";

import routes from "./routes";

export let io: socketIo.Server;

export const init = async (server: http.Server) => {
  io = new socketIo.Server(server);

  routes();

  return io;
};
