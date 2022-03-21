import { NextFunction, Request, Response } from "express";

import sender from "../utils/sender";
import middlewares from "../../middlewares";

const isAppInitialise = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ("/app/init" !== req.path) {
    const pass = await middlewares.app.isAppInitialise({
      token: req.headers.token as string,
    });

    if (pass !== true) {
      return sender(req, res, { error: { text: pass } });
    }
  }

  next();
};

const isAppExist = async (req: Request, res: Response, next: NextFunction) => {
  if (!["/app/init", "/app/register"].includes(req.path)) {
    const pass = await middlewares.app.isAppExist({
      token: req.headers.token as string,
    });

    if (pass !== true) {
      return sender(req, res, { error: { text: pass } });
    }
  }

  next();
};

export default [isAppInitialise, isAppExist];
