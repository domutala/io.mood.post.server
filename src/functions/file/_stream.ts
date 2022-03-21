import { Response } from "express";
import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { File } from "../../db/entities/File";

export default async ({ id, res }: { id: string; res: Response }) => {
  if (!id || id.length !== 24) return res.send("");

  const file = await getMongoRepository(File).findOne({
    where: { _id: { $eq: ObjectID(id) } },
  });

  if (!file) return res.send("");

  const _file = Buffer.from(file.value, "base64");

  // Create headers
  const headers = {
    "Content-Length": _file.length,
    "Content-Type": file.type,
  };

  res.writeHead(200, headers);
  res.end(_file);
};
