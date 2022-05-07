const removeFromArray = function (array, ...remove) {
  filtered = array.filter((e) => !remove.includes(e));
  return filtered;
};

removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 3, 5);

// Do not edit below this line
module.exports = removeFromArray;
