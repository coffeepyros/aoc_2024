// ADVENT OF CODE - DAY 1

// const path = "./input1-test";
const path = "./1.input";
const file = Bun.file(path);

const text = await file.text();
const numberArray = text.split("\n");

// convert file input into two lists of numbers
const leftNumbers = [];
const rightNumbers = [];

numberArray.forEach((pair) => {
  const [left, right] = pair.split("  ");
  leftNumbers.push(Number(left));
  rightNumbers.push(Number(right));
});

// console.log(leftNumbers, rightNumbers);

// First go through RIGHT! list first and count what is there
// Trying to do this with Map, instead of a "lookup" object, so I learn a bit.

const amounts = new Map();
rightNumbers.forEach((num) => {
  if (!amounts.has(num)) amounts.set(num, 1);
  else amounts.set(num, amounts.get(num) + 1);
});

// console.log(amounts);

let score = 0;

leftNumbers.forEach((num) => {
  if (amounts.has(num)) score += num * amounts.get(num);
  //   console.log("adding:", num);
});

console.log(score);
