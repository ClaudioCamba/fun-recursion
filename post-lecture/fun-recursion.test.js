const {reverseStr, sumDigits, fib} = require('./fun-recursion')

describe('reverseStr', () => {
    test('Should reverse a string', ()=>{
        //Arrange
        //Act
        const output = reverseStr('r')
        //Assertion
        expect(output).toEqual('r');
    });
    test('Should return reverse string with multiple characters', ()=>{
        //Arrange
        //Act
        const output = reverseStr('hello')
        //Assertion
        expect(output).toEqual('olleh');
    });
    test('Should return reverse string with multiple characters and spaces', ()=>{
        //Arrange
        //Act
        const output = reverseStr('katherine rules')
        //Assertion
        expect(output).toEqual('selur enirehtak');
    });
});

describe('sumDigits', () => {
    test('if a single digit returns the digit', ()=>{
        //Arrange
        //Act
        const output = sumDigits(1)
        //Assertion
        expect().toBe();
        expect(output).toEqual(1);
    });
    test('should return sum of digits of a number until only one digit remains', ()=>{
        //Arrange
        //Act
        const output = sumDigits(99)
        //Assertion
        expect().toBe();
        expect(output).toEqual(9);
    });
    test('should return sum of digits of a number until only one digit remains', ()=>{
        //Arrange
        //Act
        const output = sumDigits(999)
        //Assertion
        expect().toBe();
        expect(output).toEqual(9);
    });
    
});

describe.only('fib', () => {
    test('takes 1 and returns the number at that point in the fibonacci sequence', ()=>{
        //Arrange
        //Act
        const output = fib(1)
        //Assertion
        expect(output).toEqual(0);
    });
    test('takes a number and returns the number at that point in the fibonacci sequence', ()=>{
        //Arrange
        //Act
        const output = fib(2)
        //Assertion
        expect(output).toEqual(1);
    });
});