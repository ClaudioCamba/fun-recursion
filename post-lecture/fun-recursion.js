function reverseStr(string){
    if(string.length === 0){
        return ''
       }
   return reverseStr(string.substring(1))+string.charAt(0)
}

function sumDigits(number) {
   let numberArray = number.toString().split('')
   console.log(numberArray)
   if (numberArray.length === 1) {
    return number
   }
   else {
    return sumDigits(Number(numberArray[0])+Number(numberArray[1]))
   }
}

// needs to run the times of the number given 
// needs to know the previous numbers 
// needs to add the previus two numbers together

function fib(number){
    if (number === 1) return 1;
        return number-2 + fib(number-1)
    }
    





module.exports = {reverseStr, sumDigits, fib}