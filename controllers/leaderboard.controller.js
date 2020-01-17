function leaderBoardController() {
    function run(scores, alice) {
        let ranks = {},
            leaderboard = [];
        alice.forEach(score => {
            leaderboard = scores.concat([score]).sort((a, b) => a <= b),
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
    return {
        run
    }
}

module.exports = leaderBoardController();