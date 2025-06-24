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

// sort so that smallest numbers are on "top" of list
leftNumbers.sort((a, b) => a - b);
rightNumbers.sort((a, b) => a - b);

console.log(leftNumbers, rightNumbers);

let totalDistances = 0;
leftNumbers.forEach((leftNum, i) => {
  const rightNum = rightNumbers[i];
  totalDistances += Math.abs(leftNum - rightNum);
});

console.log(totalDistances);
