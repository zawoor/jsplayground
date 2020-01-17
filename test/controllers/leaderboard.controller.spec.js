var leaderBoard = require('../../controllers/leaderboard.controller');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('Climbing the Leaderboard', function () {
    it('Run Tests', function () {
        const inputArray = [
            {result: [4, 3, 1], leaderboard: [100, 90, 90, 80], scores: [70, 80, 105]},
            {result: [6, 5, 4, 2, 1], leaderboard: [100, 90, 90, 80, 75, 60], scores: [50, 65, 77, 90, 102]},
        ];
        inputArray.forEach(test => {
            leaderBoard.run(test.leaderboard, test.scores).should.be.deep.equal(test.result);
        });
    });
});