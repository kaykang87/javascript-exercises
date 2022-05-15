const palindromes = function (string) {
  let stringCleaned = string.replace(/[^a-zA-z]+/g, "").toLowerCase();
  let stringBackward = [...stringCleaned].reverse().join("");
  return stringCleaned === stringBackward;
};

module.exports = palindromes;
