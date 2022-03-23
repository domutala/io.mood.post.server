import { getMongoRepository } from "typeorm";
import { Session } from "../../entities/Session";

interface IFilter {
  token?: string;
}

export default async ({ filter = {} }: { filter: IFilter }) => {
  const _filter: { [key: string]: any } = {};

  if (filter.token) {
    _filter.token = { $eq: filter.token };
  }

  const _users = await getMongoRepository(Session).findOne({ where: filter });

  return _users;
};
