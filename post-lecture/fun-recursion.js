function reverseStr(string){
const reversedStr = [];

for (let i = string.length-1; i !== -1; i--){
    reversedStr.push(string[i]);
}

return reversedStr.join('');
}

module.exports = {reverseStr}