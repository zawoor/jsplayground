function FizzBuzzController() {
    function fizzbuzz(number) {
        let returnString = '';
        if (number % 3 == 0 || number % 5 == 0) {
            if (number % 3 == 0) {
                returnString = 'Fizz';
            } 
            if (number % 5 == 0) {
                returnString = returnString + 'Buzz';
            }
        } else {
            returnString = number;
        }
        return returnString;
    }
    return {
        fizzbuzz
    };
}

module.exports = FizzBuzzController();