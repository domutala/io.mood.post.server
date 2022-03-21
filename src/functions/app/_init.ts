import { App } from "../../db/entities/App";
import { getMongoRepository } from "typeorm";

import { IResponse } from "../../interfaces/Response";
import tokenGenerator from "../../utils/tokenGenerator";

export default async ({ token }: { token: string }): Promise<IResponse> => {
  let app = await getMongoRepository(App).findOne({
    where: { token: { $eq: token } },
  });

  // si aucun App existe, création
  // d'une nouvelle App
  if (!app) {
    app = new App();
    app.token = tokenGenerator();
  }

  await app.save();

  return { value: app.token };
};
