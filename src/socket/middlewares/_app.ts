import * as socketIo from "socket.io";

import middlewares from "../../middlewares";
import sender from "../utils/sender";

const isAppInitialise = async (
  socket: socketIo.Socket,
  next: Function,
  data: { event: string; [key: string]: any }
) => {
  const pass = await middlewares.app.isAppInitialise({
    token: socket.request.headers.token as string,
  });

  if (pass !== true) {
    return sender(socket, data, { error: { text: pass } });
  }

  next();
};

const isAppExist = async (
  socket: socketIo.Socket,
  next: Function,
  data: { event: string; [key: string]: any }
) => {
  const pass = await middlewares.app.isAppExist({
    token: socket.request.headers.token as string,
  });

  if (pass !== true) {
    return sender(socket, data, { error: { text: pass } });
  }

  next();
};

export default { isAppInitialise, isAppExist };
