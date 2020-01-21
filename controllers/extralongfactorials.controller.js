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
        let tempResult = [],
            carryOver = "0",
            res = "0";

        first.forEach((ups, index) => {
            res = (parseInt(ups) + parseInt(second[index]) + parseInt(carryOver)).toString();
            carryOver = res.substr(0, res.length - 1) ? res.substr(0, res.length - 1) : "0";
            if (first.length == (index + 1)) {
                tempResult.unshift("" + res);
            } else {
                tempResult.unshift("" + res.charAt(res.length - 1));
            }
        });
        return tempResult.join('');
    }

    function runSingle(n) {
        let result = "1";
        for (var i = 2; i <= n; i++) {
            if (Number.isSafeInteger(result * i)) {
                result = (result * i).toString();
            } else {
                let addition = "0";
                for (var addIndex = 0; addIndex < i; addIndex++) {
                    let first = addition.toString().padStart(Math.max(addition.toString().length, result.toString().length), "0").split("").reverse();
                    let second = result.toString().padStart(Math.max(addition.toString().length, result.toString().length), "0").split("").reverse();
                    let arrayAddition = [],
                        carryOver = "0",
                        columnSum = "0";
                    first.forEach((ups, index) => {
                        columnSum = (parseInt(ups) + parseInt(second[index]) + parseInt(carryOver)).toString();
                        carryOver = columnSum.substr(0, columnSum.length - 1) ? columnSum.substr(0, columnSum.length - 1) : "0";
                        if (first.length == (index + 1)) {
                            arrayAddition.unshift("" + columnSum);
                        } else {
                            arrayAddition.unshift("" + columnSum.charAt(columnSum.length - 1));
                        }
                    });
                    addition = arrayAddition.join('');
                }
                result = addition;
            }
        }
        return result;
    }

    return {
        run,
        add,
        runSingle
    };
}

module.exports = extraLongFactorialsController();