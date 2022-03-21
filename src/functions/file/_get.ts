import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { File } from "../../db/entities/File";

export default async ({ id }: { id: string }) => {
  if (!id) return;

  const file = await getMongoRepository(File).findOne({
    where: { _id: { $eq: ObjectID(id) } },
  });

  if (!file) return;

  delete file.value;

  return file;
};
