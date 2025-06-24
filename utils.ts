import { BunFile } from "bun";

export const loadFile = async (path: string) => {
  const file: BunFile = Bun.file(path);
  const input: string = await file.text();
  return input.split("\n");
};
