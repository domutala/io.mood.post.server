import { IResponse } from "../../controllers/utils/sender";
import data_funcs from "../../data/functions";

export default async ({ id }: { id: string }): Promise<IResponse> => {
  const user = await data_funcs.user.find({ filter: { id } });
  return { value: user };
};
