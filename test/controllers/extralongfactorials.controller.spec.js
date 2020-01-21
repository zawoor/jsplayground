var extraLongFactorials = require('../../controllers/extralongfactorials.controller');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('Extra Long Factorials', function() {
    it('should return number', function() {
        let number = 25;
        let result = '';
        const inputArray = [
            {result: '6', number: 3},

            {result: '40320', number: 8},
            {result: '362880', number: 9},
            {result: '3628800', number: 10},
            {result: '39916800', number: 11},
            {result: '479001600', number: 12},
            {result: '6227020800', number: 13},
            {result: '87178291200', number: 14},
            {result: '1307674368000', number: 15},
            {result: '20922789888000', number: 16},
            {result: '355687428096000', number: 17},
            {result: '6402373705728000', number: 18},
            {result: '121645100408832000', number: 19},
            {result: '15511210043330985984000000', number: 25},
            {result: '119622220865480194561963161495657715064383733760000000000', number: 45},
        ];
        extraLongFactorials.add('26958961203200', '87178291200').should.be.equal('27046139494400');
        extraLongFactorials.add('95379736678237146739572634997355132068513997507264512000000000', '1907594733564742934791452699947102641370279950145290240000000000').should.be.equal('2002974470242980081531025334944457773438793947652554752000000000');

        inputArray.forEach(test => {
            extraLongFactorials.runSingle(test.number).should.be.equal(test.result);
        });              

    });
});