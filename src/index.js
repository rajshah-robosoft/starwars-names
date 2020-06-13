var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-name.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
  randomLists: random,
  isNameAvailable: find
}

function find(search) {
  return starWarsNames.includes(search)
}

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    return new Array(5).fill().reduce((arr) => {
      arr.push(getRandomItem())
      return arr
    }, [])
  }
}