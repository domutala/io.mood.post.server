import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { App } from "../../db/entities/App";

export const isAppInitialise = async ({ token }: { token: string }) => {
  if (!token) {
    return "notAppInitialized";
  }

  const app = await getMongoRepository(App).findOne({
    where: { token: { $eq: token } },
  });

  if (!app) {
    return "notAppRecongnized";
  }

  return true;
};

export const isAppExist = async ({ token }: { token: string }) => {
  const app = await getMongoRepository(App).findOne({
    where: { token: { $eq: token } },
  });

  if (!app) {
    return "notAppRecongnized";
  }

  return true;
};

export default {
  isAppInitialise,
  isAppExist,
};
