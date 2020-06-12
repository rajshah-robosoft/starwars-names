var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-name.json');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}