import { IResponse } from "../../interfaces/Response";
import { Request, Response } from "express";

const json = async (req: Request, res: Response, data: any) => {
  res.json(data);
};

const error = async (req: Request, res: Response, error: any) => {
  console.log(error);

  if (error.text) {
    res.status(400).json({ error: true, message: error.text });
  } else {
    res.status(400).json({
      error: true,
      message: "unknowError",
    });
  }
};

export default async (req: Request, res: Response, response: IResponse) => {
  if (response.error) {
    return error(req, res, response.error);
  }

  return json(req, res, response.value);
};
