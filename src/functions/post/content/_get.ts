import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { Post } from "../../../db/entities/Post";
import { Content } from "../../../db/entities/Content";
import { IResponse } from "src/interfaces/Response";

export default async ({ id }: { id: string }): Promise<IResponse> => {
  let content: Content | Post;

  content = await getMongoRepository(Content).findOne({
    where: { _id: { $eq: ObjectID(id) } },
  });

  if (!content) {
    content = await getMongoRepository(Post).findOne({
      where: { _id: { $eq: ObjectID(id) } },
    });
  }

  return { value: content };
};
