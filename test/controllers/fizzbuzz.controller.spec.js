var fizzbuzz = require('../../controllers/fizzbuzz.controller');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('FizzBuzz', function() {
    it('should return number', function() {
        let number = 2;
        fizzbuzz.fizzbuzz(number).should.be.equal(number);
    });
    it('should return Fizz', function() {
        let number = 3;
        fizzbuzz.fizzbuzz(number).should.be.equal('Fizz');
    });
    it('should return Buzz', function() {
        let number = 5;
        fizzbuzz.fizzbuzz(number).should.be.equal('Buzz');
    });
    it('should return FizzBuzz', function() {
        let number = 15;
        fizzbuzz.fizzbuzz(number).should.be.equal('FizzBuzz');
    });
});