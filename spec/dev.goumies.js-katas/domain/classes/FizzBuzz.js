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
        if(number % 15 === 0) {
            return 'FizzBuzz';
        }
        if(number % 5 === 0) {
            return 'Buzz';
        }
        if(number % 3 === 0) {
            return 'Fizz';
        }
        if(FizzBuzz.isJustAMultipleOfOne(number))
            return ''+number;
    }

    static isJustAMultipleOfOne(number) {
        return !(number % 15 === 0
            && number % 5 === 0
            && number % 3 === 0);
    }
}

module.exports = FizzBuzz;