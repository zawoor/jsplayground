var lcss = require('../../controllers/longestcommonsubsequence.controller');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('Longest Commmon Subsequence', function () {
    it('Run Tests', function () {
        const inputArray = [
            {result: 'ZZABAAA', test: ['ZZABAAA', 'ZZABAAA']},
            {result: 'ABA', test: ['ABA', 'ZZABAAA']},
            {result: 'ABA', test: ['ZZABAAA', 'ABA']},
            {result: 'ABAD', test: ['ABAZDC', 'BACBAD']},
            {result: 'GTAB', test: ['AGSGTAB', 'GXTXAYB']},
            {result: 'aa', test: ['aaaa', 'aa']},
            {result: 'ABBA', test: ['ABBA', 'ABCABA']}
        ]
        inputArray.forEach(inputArray => {
            lcss.run(inputArray.test[0], inputArray.test[1]).should.be.equal(inputArray.result);
        });
    });
});