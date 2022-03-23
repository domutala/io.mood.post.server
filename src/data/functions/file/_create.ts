import * as fileUpload from "express-fileupload";

import { File } from "../../entities/File";
import funcs from ".";

export default async (file: fileUpload.UploadedFile, update?: string) => {
  let _file: File;

  if (update) _file = await funcs.get({ id: update });
  if (!_file) _file = new File();

  _file.type = file.mimetype;
  _file.name = file.name;
  _file.value = file.data.toString("base64");

  await _file.save();
  return _file.id.toString();
};
