var fizzBuzz = (function () {

    var isDivisibleByThreeAndFive = function (number) {
        return number % 15 === 0;
    }

    var isDivisibleByFive = function (number) {
        return number % 5 === 0;
    }

    var isDivisibleByThree = function (number) {
        return number % 3 === 0;
    }

    return {
        getResult : function (number) {
            
            if (isDivisibleByThreeAndFive(number)) {
                return "FizzBuzz"
            }

            if (isDivisibleByFive(number)) {
                return "Buzz"
            }

            if (isDivisibleByThree(number)) {
                return "Fizz"
            }

            return number
        }
    }
})();