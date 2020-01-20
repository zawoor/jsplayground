function leaderBoardController() {
    function run(scores, alice) {
        let ranks = {},
            leaderboard = [],
            currentRank = 1;
        alice.forEach(score => {
            leaderboard = scores.concat([parseInt(score)]).sort((a, b) => parseInt(b) - parseInt(a)),
                currentRank = 1;
            leaderboard.forEach((e, index) => {
                if (index && e !== leaderboard[index - 1]) {
                    currentRank++
                }
                if (score == e) ranks[score] = currentRank;
            });
        });
        return alice.map(e => ranks[e]);
    }

    function run2(scores, alice) {
        let ranks = {},
            leaderboard = [...new Set(scores)];
        alice.forEach(score => {
            for (var index = 0; index <= leaderboard.length; index++) {
                ranks[score] = index + 1;
                if (score >= leaderboard[index]) {
                    break;
                }
            }
        });
        return alice.map(e => ranks[e]);
    }

    function run3(scores, alice) {
        let ranks = {},
            leaderboard = [...new Set(scores)],
            index = leaderboard.length - 1;
        alice.forEach(score => {
            while (index >= 0) {
                if (score >= leaderboard[index]) {
                    index--;
                } else {
                    ranks[score] = index + 2;
                    break;
                }
            }
            if (index < 0) {
                ranks[score] = 1;
            }
        });
        return alice.map(e => ranks[e]);
    }

    function notmy(scores, alice) {
        let positions = [];
        let distScore = [...new Set(scores)];
        let aliceIndex = 0;
        let i = distScore.length - 1;
        alice.forEach(element => {

            while (i >= 0) {
                if (element >= distScore[i]) {
                    i--;
                } else {
                    positions.push(i + 2);
                    break;
                }
            }
            if (i < 0) positions.push(1);

        });

        return positions;
    }
    return {
        run,
        run2,
        run3,
        notmy
    }
}

module.exports = leaderBoardController();