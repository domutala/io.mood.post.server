import * as socketIo from "socket.io";
import app from "./_app";

export const init = async (
  socket: socketIo.Socket,
  next: Function,
  data: {
    event: string;
    [key: string]: any;
  }
) => {
  app.isAppInitialise(
    socket,
    () => app.isAppExist(socket, () => next(), data),
    data
  );
};
