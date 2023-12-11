const {reverseStr, sumDigits, fib, deepTotal, deepIncludes} = require('./fun-recursion')

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

describe('fib', () => {
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
    test('takes a number and returns the number at that point in the fibonacci sequence', ()=>{
        //Arrange
        //Act
        const output = fib(7)
        //Assertion
        expect(output).toEqual(8);
    });
});

describe('deepTotal', () => {
    test('It should take an array and return sum of array', ()=>{
        //Arrange
        //Act
        const output = deepTotal([1, 2, 3])
        //Assertion
        expect(output).toEqual(6);
    });
    test('It should take nested array and return sum', ()=>{
        //Arrange
        //Act
        const output = deepTotal([1, [5, 10]])
        //Assertion
        expect(output).toEqual(16);
    });
    test('It should take a nested nested array and return sum', ()=>{
        //Arrange
        //Act
        const output = deepTotal([3, [[6]], 9])
        //Assertion
        expect(output).toEqual(18);
    });
});

describe.only('deepIncludes', () => {
    test('It should take an array and return sum of array', ()=>{
        //Arrange
        //Act
        const output = deepIncludes([1, 2], 3);
        //Assertion
        expect(output).toEqual(false);
    });
    test('It should take nested array and return sum', ()=>{
        //Arrange
        //Act
        const output = deepIncludes(["toast", ["avocado", ["chilli flakes"]]], "avocado");
        //Assertion
        expect(output).toEqual(true);
    });
});
