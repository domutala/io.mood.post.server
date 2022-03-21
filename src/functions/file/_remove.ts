import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { File } from "../../db/entities/File";

export default async (id: string) => {
  if (!id) {
    return { text: "notFileFound" };
  }

  const file = await getMongoRepository(File).findOne({
    where: { _id: { $eq: ObjectID(id) } },
  });

  if (!file) {
    return { text: "notFileFound" };
  }

  await file.remove();

  return true;
};
