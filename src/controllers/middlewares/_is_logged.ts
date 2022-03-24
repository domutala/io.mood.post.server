import { NextFunction, Request, Response } from "express";
import { Session } from "../../data/entities/Session";
import services from "../../services";
import sender from "../utils/sender";

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
  inverse = false
) => {
  const token = req.headers.token as string;
  const session = await services.session.get({ token });
  const user_id = (session.value as Session).user;

  if (inverse) {
    if (user_id) {
      return () => sender(req, res, { error: { text: "alreadyLogged" } });
    }
  } else {
    if (!user_id) {
      return () => sender(req, res, { error: { text: "notLogged" } });
    }
  }

  return next;
};
