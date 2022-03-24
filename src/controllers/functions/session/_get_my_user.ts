import { Request, Response } from "express";

import sender from "../../utils/sender";
import services from "../../../services";
import { Session } from "../../../data/entities/Session";
import { User } from "../../../data/entities/User";

export default async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;
    const session = await services.session.get({ token });
    const user_id = (session.value as Session).user;

    if (!user_id) {
      return sender(req, res, { value: undefined });
    }

    const u = await services.user.get({ id: user_id });
    if (!u.value || !(u.value as User[]).length) {
      return sender(req, res, { value: undefined });
    }

    sender(req, res, { value: (u.value as User[])[0] });
  } catch (error) {
    sender(req, res, { error });
  }
};
