import { Request, Response } from "express";

import sender from "../../utils/sender";
import services from "../../../services";

export default async (req: Request, res: Response) => {
  try {
    const response = await services.session.init({
      token: req.headers.token as string,
    });

    sender(req, res, response);
  } catch (error) {
    sender(req, res, { error });
  }
};
