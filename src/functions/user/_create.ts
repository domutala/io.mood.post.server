import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import fileUpload from "express-fileupload";

import { User } from "../../db/entities/User";
import { IResponse } from "src/interfaces/Response";
import funcs from "..";

export default async (user: User): Promise<IResponse> => {
  let _user: User;

  if (user.id) {
    _user = await getMongoRepository(User).findOne({
      where: { _id: { $eq: ObjectID(user.id.toString()) } },
    });
  }

  if (!_user) _user = new User();

  _user.name = user.name || _user.name;
  _user.phone = user.phone || _user.phone;
  _user.status = user.status || _user.status;

  if (user.avatar && typeof user.avatar !== "string") {
    const avatar: fileUpload.UploadedFile = Array.isArray(user.avatar)
      ? user.avatar[0]
      : user.avatar;

    user.avatar = await funcs.file.add(avatar);
  }

  await _user.save();

  return { value: true };
};
