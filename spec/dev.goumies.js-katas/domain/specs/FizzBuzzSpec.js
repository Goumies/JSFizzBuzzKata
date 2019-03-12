const FizzBuzz = require('../classes/FizzBuzz.js');

describe("FizzBuzz", () => {
    it('should count from 1 to 10', () => {
        let countFrom0To100 = FizzBuzz.countTo(10);
        expect(countFrom0To100).toEqual('1 2 3 4 5 6 7 8 9 10')
    });

    it('should return the given number', () => {
        let numberGivenAMultipleOfOneAndNot3Or5Or15 = FizzBuzz.generate(1);
        expect(numberGivenAMultipleOfOneAndNot3Or5Or15).toEqual('1')
    })

    it('should return Fizz', () => {
        let fizzGivenAMultipleOfThree = FizzBuzz.generate(3);
        expect(fizzGivenAMultipleOfThree).toEqual('Fizz')
    })

    it('should return Buzz', () => {
        let buzzGivenAMultipleOfThree = FizzBuzz.generate(5);
        expect(buzzGivenAMultipleOfThree).toEqual('Buzz')
    })

    it('should return FizzBuzz', () => {
        let fizzGivenAMultipleOfThree = FizzBuzz.generate(15);
        expect(fizzGivenAMultipleOfThree).toEqual('FizzBuzz')
    })

    /*it('should return complete FizzBuzz from 1 to 100', () => {
        let fizzGivenAMultipleOfThree = FizzBuzz.compute(15);
        expect(fizzGivienAMultipleOfThree).toEqual('FizzBuzz')
    })*/
});
