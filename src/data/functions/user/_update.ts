import { User } from "../../entities/User";
import user_funcs from "./index";

/**
 * @description
 * cette fonction est chargé de modifier une varibale d'un
 * utilisateur dans la base de données
 */
export default async (user: User, data: { key: string; value: any }) => {
  /// charger l'utilisateur de la base de données s'il existe
  let _user: User;

  /// recherche d'un utilisateur avec le meme id dans la base de données
  const u = await user_funcs.find({ filter: { id: user.id.toString() } });
  if (u.length) _user = u[0];

  _user[data.key] = data.value;

  await _user.save();

  return _user.id.toString();
};
