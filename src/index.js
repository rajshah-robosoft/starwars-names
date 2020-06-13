import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-name.json';

var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  getAllNames: starWarsNames,
  getRandomName: uniqueRandomArray(starWarsNames),
  randomLists: random,
  isNameAvailable: find,
  getListFromSearchItem: findName
}

function findName(name) {
  return starWarsNames.filter(item => item.toLowerCase().startsWith(name))
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