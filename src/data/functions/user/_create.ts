import { User } from "../../entities/User";
import u_token from "../../../utils/token";
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
  if (!user) {
    _user = new User();
    _user.name = user.name || (user as any).displayName;
    _user.uid = user.uid;
    _user.email = user.email;

    /// création d'un nom d'utilisateur
    const username = _user.name.split(" ").join("_");
    let isDispo = false;
    let sufix = "";

    while (!isDispo) {
      const usrn = `${username}_${sufix}`;
      const u = await user_funcs.find({ filter: { username: usrn } });

      isDispo = u.length !== 0;
      if (!isDispo) sufix = u_token.generate_1();
    }

    _user.username = `${username}_${sufix}`;
  }

  await _user.save();

  return _user.id.toString();
};
