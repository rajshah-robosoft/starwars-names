var expect = require('chai').expect;
var starWars = require('./index');

describe('raj-shah-starwars-names', function () {
  describe('getAllNames', function () {
    it('should be array of string', function () {
      expect(starWars.getAllNames).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === "string";
        })
      }
    })

    it('should contain `Luke Skywalker`', function () {
      expect(starWars.getAllNames).to.include('Luke Skywalker');
    })
  })

  describe('random', function () {
    it('should return a random item from the starWars.getAllNames', function () {
      var randomItem = starWars.getRandomName();
      expect(starWars.getAllNames).to.include(randomItem);
    })

    it('should return an array of random items if passed a number', function () {
      let randomItems = starWars.randomLists(3);
      randomItems.forEach(function (item) {
        expect(starWars.getAllNames).to.include(item);
      })
    })
  })

  describe('find', function () {
    it('should return true or false', function () {
      expect(starWars.isNameAvailable('Luke Skywalker')).to.equal(true);
    })
  })

  describe('getListFromSearchItem', function () {
    it('should return array of names', function () {
      expect(starWars.getListFromSearchItem('luke')).to.deep.equal([ 'Luke Skywalker' ]);
    })
  })
})