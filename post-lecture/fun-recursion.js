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
// fib(1)-- > 0;
// fib(2)-- > 1;
// fib(7)-- > 8;

function fib(n){
    if (n <= 1){
        return 0;
    }
    if (n === 3 || n === 2) {
        return 1;
    }
    if (n === 4){
        return 2;
    }

    return fib(n-1) + fib(n-2);
}

function deepTotal(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (Array.isArray(number)){
            sum += deepTotal(number);
        }
        if (typeof number === 'number') {
            sum += number;
        }
    }
    return sum;
}

function deepIncludes(arr,val) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (Array.isArray(value)){
           sum += deepIncludes(value, val);
        }
        if (value === val) {
            sum++;
        }
    }
    if (sum > 0) return true
    if (sum === 0) return false
}


module.exports = {reverseStr, sumDigits, fib, deepTotal, deepIncludes}