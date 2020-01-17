var sockMerchant = require('../../controllers/sockmerchant.controller');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
describe('Sock Merchant', function () {
    it('Run Tests', function () {

        const inputArray = [
            {result: 4, test: ['10', '20', '20', '10', '10', '30', '50', '50', '10']},
            {result: 3, test: ['10', '20', '20', '10', '10', '30', '50', '10', '20']}
        ]
        inputArray.forEach(element => {
            sockMerchant.run(element.test).should.be.equal(element.result);
        });
    });
});