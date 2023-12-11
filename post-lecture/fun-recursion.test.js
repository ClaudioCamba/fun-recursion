const {reverseStr} = require('./fun-recursion')

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