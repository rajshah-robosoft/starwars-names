import { expect } from 'chai';
import { getAllNames, getRandomName, randomLists, isNameAvailable, getListFromSearchItem } from './index';

describe('raj-shah-starwars-names', function () {
  describe('getAllNames', function () {
    it('should be array of string', function () {
      expect(getAllNames).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === "string";
        })
      }
    })

    it('should contain `Luke Skywalker`', function () {
      expect(getAllNames).to.include('Luke Skywalker');
    })
  })

  describe('random', function () {
    it('should return a random item from the starWars.getAllNames', function () {
      var randomItem = getRandomName();
      expect(getAllNames).to.include(randomItem);
    })

    it('should return an array of random items if passed a number', function () {
      let randomItems = randomLists(3);
      randomItems.forEach(function (item) {
        expect(getAllNames).to.include(item);
      })
    })
  })

  describe('find', function () {
    it('should return true or false', function () {
      expect(isNameAvailable('Luke Skywalker')).to.equal(true);
    })
  })

  describe('getListFromSearchItem', function () {
    it('should return array of names', function () {
      expect(getListFromSearchItem('luke')).to.deep.equal([ 'Luke Skywalker' ]);
    })
  })
})