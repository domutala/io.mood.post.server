import { Request, Response } from "express";

import sender from "../../utils/sender";
import funcs from "../../../functions";

export default async (req: Request, res: Response) => {
  try {
    let parent: string;
    let type: "post" | "comment" = "post";

    if (req.body.parent) {
      parent = (await funcs.post.get({ id: req.body.parent })).value;
    }

    const response = await funcs.post.add({
      parent,
    });
    sender(req, res, response);
  } catch (error) {
    sender(req, res, { error: error });
  }
};
