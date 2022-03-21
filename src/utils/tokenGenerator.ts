import * as TokenGenerator from "uuid-token-generator";

export default (
  {
    size = 256,
    encoding = TokenGenerator.BASE16,
  }: { size?: number; encoding?: string } = {
    size: 256,
    encoding: TokenGenerator.BASE16,
  }
) => {
  const token = new TokenGenerator(size, encoding);
  return token.generate();
};
