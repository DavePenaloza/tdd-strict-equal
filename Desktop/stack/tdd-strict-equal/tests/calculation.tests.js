var describe = require('mocha').describe
var it = require('mocha').it
var strictEqual = require('../calculation')
var expect = require('chai').expect

describe('stricEqual', function () {
  describe('strictEqual', () => {
    it('return value of true if all the values are strictly equal to each other', () => {
      // set up the test data
      var testData = strictEqual(5, 5)

      // assert what should be true
    }); expect(testData).to.equal(true)
  })
})

describe('stricEqual', function () {
  describe('strictEqual', () => {
    it('return value of true if all the values are strictly equal to each other', () => {
      // set up the test data
      var testData = strictEqual('5', '5')

      // assert what should be true
    }); expect(testData).to.equal(true)
  })
})

describe('stricEqual', function () {
  describe('strictEqual', () => {
    it('return value of true if all the values are strictly equal to each other', () => {
      // set up the test data
      var testData = strictEqual('a', 'a')

      // assert what should be true
    }); expect(testData).to.equal(true)
  })
})

describe('stricEqual', function () {
  describe('strictEqual', () => {
    it('return value of false if all the values are not strictly equal to each other', () => {
      // set up the test data
      var testData = strictEqual( 1, 'a')

      // assert what should be true
    }); expect(testData).to.equal(false)
  })
})

describe('stricEqual', function () {
  describe('strictEqual', () => {
    it('return value of false if all the values are not strictly equal to each other', () => {
      // set up the test data
      var testData = strictEqual( 1, '1')

      // assert what should be true
    }); expect(testData).to.equal(false)
  })
})