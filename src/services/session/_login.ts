import { IResponse } from "../../controllers/utils/sender";
import data_funcs from "../../data/functions";

export default async ({
  token,
  body,
}: {
  token: string;
  body: any;
}): Promise<IResponse> => {
  const $or: { [key: string]: any }[] = [];

  delete body.id;

  if (body.uid) $or.push({ uid: { $eq: body.uid } });
  if (body.email) $or.push({ email: { $eq: body.email } });
  if (body.phone) $or.push({ phone: { $eq: body.phone } });

  let user_id: string;

  const u = await data_funcs.user.find({ where: { $or } });
  if (!u.length) user_id = await data_funcs.user.create(body);
  else user_id = u[0].id.toString();

  await data_funcs.session.login({ token, user: user_id });

  return { value: token };
};
