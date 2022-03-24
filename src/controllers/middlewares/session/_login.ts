import { NextFunction, Request, Response } from "express";
import middlewares from "..";

export default async (req: Request, res: Response, next: NextFunction) => {
  const func = await middlewares.is_logged(req, res, next, true);
  func();
};
