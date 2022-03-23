import { User } from "../../entities/User";
import user_funcs from "./index";

/**
 * @description
 * cette fonction est chargé d'ajouter ou de modifier un utilisateur
 * @arguments user -- User
 * @returns user_id
 */
export default async (user: User) => {
  /// charger l'utilisateur de la base de données s'il existe
  let _user: User;

  // recherche d'un utilisateur avec le meme id dans la base de données
  if (user.id) {
    const u = await user_funcs.find({ filter: { id: user.id.toString() } });
    if (u.length) _user = u[0];
  }

  /// Créer un nouvel utilisateur s'il n'existe pas
  if (!_user) _user = new User();

  await _user.save();

  return _user.id.toString();
};
