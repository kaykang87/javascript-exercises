const add = (a, b) => a + b;

const subtract = function (a, b) {
  return a - b;
};

// function to return sum of arrays
const sum = function (arr) {
  return arr.reduce((total, value) => total + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, value) => total * value, 1);
};

// function to raise one number to the power of another number
const power = (a, b) => Math.pow(a, b);

// function to find factorial of number
const factorial = (a) => {
  if (a === 0) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
