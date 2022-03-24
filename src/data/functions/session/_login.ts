import funcs from ".";

export default async ({ token, user }: { token: string; user: string }) => {
  const _session = await funcs.get({ filter: { token: token } });

  _session.user = user;
  await _session.save();

  return _session.token;
};
