import * as socketIo from "socket.io";
import { IResponse } from "../../interfaces/Response";

export default async (
  socket: socketIo.Socket,
  data: { event: string; [key: string]: any },
  response: IResponse
) => {
  if (response.error) {
    return socket.emit("error", { data, error: response.error });
  }

  return socket.emit("json", response.value);
};
