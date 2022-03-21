import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import * as fileUpload from "express-fileupload";

import { File } from "../../db/entities/File";

export default async (file: fileUpload.UploadedFile, update?: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    if (!file) {
      throw { text: "noFileFound" };
    }

    let _file = await getMongoRepository(File).findOne({
      where: { _id: { $eq: ObjectID(update) } },
    });

    if (!_file) {
      _file = new File();
    }

    _file.type = file.mimetype;
    _file.name = file.name;
    _file.value = file.data.toString("base64");

    await _file.save();

    return _file.id.toString();
  } catch (error) {
    throw error;
  }
};
