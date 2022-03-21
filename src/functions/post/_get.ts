import { ObjectID } from "mongodb";
import { Post } from "../../db/entities/Post";
import { IResponse } from "../../interfaces/Response";
import { getMongoRepository } from "typeorm";

export default async ({ id }: { id: string }): Promise<IResponse> => {
  if (typeof id !== "string" || id.length !== 24) {
    return { error: { text: "invalidValue" } };
  }

  const post = await getMongoRepository(Post).findOne({
    where: { _id: { $eq: ObjectID(id) } },
  });

  return { value: post };
};
