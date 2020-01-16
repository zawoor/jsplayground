function LongestCommonSubSequenceController() {
    function run(s1, s2) {
        if (s1 == s2) {
            return s1;
        } else if (s1.indexOf(s2) != -1) {
            return s2;
        } else if (s2.indexOf(s1) != -1) {
            return s1;
        } else {
            var s1Res = [];
            var s2Res = [];
            const s1Ex = [...s1];
            const s2Ex = [...s2];
            s1Ex.forEach((char, index) => {
                let secondStringIndex = s2Ex.indexOf(char, index);
                if (secondStringIndex != -1) {
                    s1Res.push(char)
                }
            });

            s2Ex.forEach((char, index) => {
                let secondStringIndex = s1Ex.indexOf(char, index);
                if (secondStringIndex != -1) {
                    s2Res.push(char)
                }
            });

            if (s1Res.join('').length >= s2Res.join('').length) {
                return s1Res.join('');
            } else {
                return s2Res.join('');
            }
        }
    }
    return {
        run
    };
}

module.exports = LongestCommonSubSequenceController();