import { IResponse } from "../../controllers/utils/sender";
import data_funcs from "../../data/functions";

export default async ({ token }: { token: string }): Promise<IResponse> => {
  const session = await data_funcs.session.get({ filter: { token } });
  return { value: session };
};
