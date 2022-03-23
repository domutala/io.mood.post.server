import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { File } from "../../entities/File";

export default async ({ id }: { id: string }) => {
  const file = await getMongoRepository(File).findOne({
    where: { _id: { $eq: ObjectID(id) } },
  });

  if (!file) return;

  delete file.value;

  return file;
};
