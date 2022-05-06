const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    return `${string.repeat(num)}`;
  }
};

const repeatString2 = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
