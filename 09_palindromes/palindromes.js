const palindromes = function (pal) {
  // check if a word is spelled the same way backward
  let forward = pal.toLowerCase().replace(/[^a-zA-z]+/g, "");
  let backward = [...pal]
    .reverse()
    .join("")
    .toLowerCase()
    .replace(/[^a-zA-z]+/g, "");
  console.log(forward, backward);
  return forward === backward;
};


// Do not edit below this line
module.exports = palindromes;
