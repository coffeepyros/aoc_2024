// ADVENT OF CODE - DAY 2
import { loadFile } from "../utils.ts";

// const reports: string[] = await loadFile("./test.input");
// const reports: string[] = await loadFile("./d2-input.txt");

const testInput: string =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const pattern: RegExp = /mul\(/g;

const found: RegExpMatchArray | null = testInput.match(pattern);
console.log(found);
