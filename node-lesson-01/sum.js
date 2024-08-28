const process = require("process");
console.log("Assignment1: Sum of two numbers in Node.js");
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
let sum;
if (!isNaN(num1) && !isNaN(num2)) {
  sum = num1 + num2;
}
console.log(`Sum: ${sum}`);
