import { IResponse } from "../../controllers/utils/sender";
import data_funcs from "../../data/functions";

export default async ({ token }: { token: string }): Promise<IResponse> => {
  const _token = await data_funcs.session.create({ token });
  return { value: _token };
};
