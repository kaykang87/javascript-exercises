const findTheOldest = (array) => {
  return array.reduce((previousAge, currentAge) => {
    const previousPerson = getAge(
      previousAge.yearOfDeath,
      previousAge.yearOfBirth
    );
    const currentPerson = getAge(
      currentAge.yearOfDeath,
      currentAge.yearOfBirth
    );
    return previousPerson > currentPerson ? previousAge : currentAge;
  });
};

const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
