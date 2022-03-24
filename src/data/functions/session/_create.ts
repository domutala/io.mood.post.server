import { Session } from "../../entities/Session";

import u_token from "../../../utils/token";
import funcs from ".";

export default async ({ token }: { token?: string }) => {
  let _session: Session;
  if (token) _session = await funcs.get({ filter: { token: token } });

  /// si aucun App existe, création
  /// d'une nouvelle App
  if (!_session) {
    _session = new Session();
    _session.token = u_token.generate_0();
  }

  await _session.save();

  return _session.token;
};
