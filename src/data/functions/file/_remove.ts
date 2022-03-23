import funcs from ".";

export default async (id: string) => {
  const file = await funcs.get({ id });
  if (!file) return "notFileFound";

  await file.remove();

  return true;
};
