function extraLongFactorialsController() {
    function run(n) {
        let result = "1";
        for (var i = 2; i <= n; i++) {
            if (Number.isSafeInteger(result * i)) {
                result = (result * i).toString();
            } else {
                let addition = "0";
                for (var addIndex = 0; addIndex < i; addIndex++) {
                    addition = this.add(addition.toString(), result.toString());
                }
                result = addition;
            }
        }
        return result;
    }


    function add(a, b) {
        let first = a.padStart(Math.max(a.length, b.length), "0").split("");
        let second = b.padStart(Math.max(a.length, b.length), "0").split("");
        first = first.reverse();
        second = second.reverse();
        let result = [],
            carryOver = "0",
            res = "0";

        first.forEach((ups, index) => {
            res = (parseInt(ups) + parseInt(second[index]) + parseInt(carryOver)).toString();
            carryOver = res.substr(0, res.length - 1) ? res.substr(0, res.length - 1) : "0";
            if (first.length == (index + 1)) {
                result.unshift("" + res);
            } else {
                result.unshift("" + res.charAt(res.length - 1));
            }
        });
        return result.join('');
    }

    return {
        run,
        add
    };
}

module.exports = extraLongFactorialsController();