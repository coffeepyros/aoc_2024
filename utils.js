export const loadFile = async (path) => {
  const file = Bun.file(path);
  const input = await file.text();
  return input.split("\n");
};
