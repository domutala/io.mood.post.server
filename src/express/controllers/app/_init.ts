import { Request, Response } from "express";

import sender from "../../utils/sender";
import funcs from "../../../functions";

export default async (req: Request, res: Response) => {
  try {
    const response = await funcs.app.init({
      token: req.headers.token as string,
    });
    sender(req, res, response);
  } catch (error) {
    sender(req, res, { error: error });
  }
};
