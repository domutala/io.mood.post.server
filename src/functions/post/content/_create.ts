import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import fileUpload from "express-fileupload";

import { Post } from "../../../db/entities/Post";
import { Content } from "../../../db/entities/Content";
import { IResponse } from "src/interfaces/Response";
import funcs from "../..";

export default async ({
  post,
  content,
  file,
}: {
  post: Post;
  content: Content;
  file: fileUpload.UploadedFile | fileUpload.UploadedFile[];
}): Promise<IResponse> => {
  let _content: Content;

  if (content.id) {
    _content = await getMongoRepository(Content).findOne({
      where: { _id: { $eq: ObjectID(content.id.toString()) } },
    });
  }

  if (!_content) {
    _content = new Content();
    await _content.save();

    post.contents.push(_content.id.toString());
  }

  const types = ["text", "picture", "video"];
  if (!types.includes(content.type)) return { error: { text: "invalidValue" } };
  if (!content.value) return { error: { text: "invalidValue" } };

  _content.type = content.type;
  _content.value = {};

  if (content.type === "text") {
    if (!content.value.text) return { error: { text: "invalidValue" } };

    const gSize = [1, 1.5, 2, 2.5, 3].includes(content.value.size);
    _content.value.size = gSize ? content.value.size : 1;
    _content.value.text = content.value.text;
  } else {
    if (typeof content.value.file === "string") {
      _content.value.file = content.value.file;
    } else if (file) {
      file = Array.isArray(file) ? file[0] : file;
      _content.value.file = await funcs.file.add(file);
    }
  }

  await _content.save();
  await post.save();

  return { value: _content.id };
};
