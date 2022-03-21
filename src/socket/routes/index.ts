import * as socketIo from "socket.io";

import app from "./_app";
import { io } from "..";
import * as middlewares from "../middlewares";
import sender from "../utils/sender";

export default () => {
  io.on("connection", async (socket) => {
    middlewares.init(socket, () => fn(socket), { event: "connection" });
  });
};

const fn = async (socket: socketIo.Socket) => {
  sender(socket, { event: "success_connection" }, { value: true });
  app(socket);
};
