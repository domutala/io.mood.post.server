import { User } from "../../db/entities/User";
import { Post } from "../../db/entities/Post";
import { IResponse } from "src/interfaces/Response";

export default async ({
  user,
  type = "post",
  parent,
}: {
  user: User;
  type: "post" | "comment";
  parent?: string;
}): Promise<IResponse> => {
  const post = new Post();

  post.user = user.id.toString();
  post.type = type;
  post.parent = parent;
  post.contents = [];

  await post.save();
  return { value: post.id };
};
