import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import { User } from "../../entities/User";

/**
 * @description
 * cette fonction est chargé d'intorroger las base données et de renvoyer un ou
 * plusieurs utilisateur
 */

interface IFilter {
  id?: string;
}

export default async ({ filter = {} }: { filter: IFilter }) => {
  /// charger l'utilisateur de la base de données s'il existe
  const _filter: { [key: string]: any } = {};

  if (filter.id) {
    _filter._id = { $eq: ObjectID(filter.id) };
  }

  const _users = await getMongoRepository(User).find({ where: filter });

  return _users;
};
