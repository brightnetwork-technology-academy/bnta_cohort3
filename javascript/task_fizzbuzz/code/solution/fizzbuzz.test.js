const fizzBuzz = require('./fizzbuzz');

describe('Fizz tests', () => {
    
    test('should return fizz for 3', () => {
        expect(fizzBuzz(3)).toBe("fizz");
    });

    test('should return fizz for 6', () => {
        expect(fizzBuzz(6)).toBe("fizz");
    });

});

describe('Buzz tests', () => {

    test('should return buzz for 5', () => {
        expect(fizzBuzz(5)).toBe("buzz");
    });

    test('should return buzz for 10', () => {
        expect(fizzBuzz(10)).toBe("buzz");
    });

});

describe('FizzBuzz tests', () => {
    
    test('should return fizzbuzz for 15', () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    });

    test('should return fizzbuzz for 30', () => {
        expect(fizzBuzz(30)).toBe("fizzbuzz");
    });

});

describe('number tests', () => {
    
    test('should return 1 for 1', () => {
        expect(fizzBuzz(1)).toBe(1);
    });

    test('should return 7 for 7', () => {
        expect(fizzBuzz(7)).toBe(7);
    });
    
});

describe('extreme values', () => {

    test('should return fizz for 999999999', () => {
        expect(fizzBuzz(999999999)).toBe("fizz");
    });

    test('should return fizz for -3', () => {
        expect(fizzBuzz(-3)).toBe("fizz");
    });

    test('should return fizzbuzz for 0', () => {
        expect(fizzBuzz(0)).toBe("fizzbuzz");
     });

    test('should return buzz for 1000000', () => {
        expect(fizzBuzz(1000000)).toBe("buzz");
    });

    test('should return 1234567 for 1234567', () => {
        expect(fizzBuzz(1234567)).toBe(1234567);
    });
    
});



