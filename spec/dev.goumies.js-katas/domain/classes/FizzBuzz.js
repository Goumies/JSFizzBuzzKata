class FizzBuzz {
    constructor(){

    }

    static countTo(number) {
        let output = '';
        for (let i = 1; i <= number; i++) {
            output += '' + i + ' ';
        }
        return output.trim();
    }

    static generate(number) {
        if (this.isAMultipleOfFifteen(number)) {
            return 'FizzBuzz';
        }
        if (this.isAMultipleOfFive(number)) {
            return 'Buzz';
        }
        if (this.isAMultipleOfThree(number)) {
            return 'Fizz';
        }
        if (this.isJustAMultipleOfOne(number))
            return ''+number;
    }

    static isAMultipleOfFifteen(number) {
        return number % 15 === 0;
    }

    static isAMultipleOfFive(number) {
        return number % 5 === 0;
    }

    static isAMultipleOfThree(number) {
        return number % 3 === 0;
    }

    static isJustAMultipleOfOne(number) {
        return !(number % 15 === 0
            && number % 5 === 0
            && number % 3 === 0);
    }
}

module.exports = FizzBuzz;