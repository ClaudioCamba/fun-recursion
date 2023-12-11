function reverseStr(string){
    if (string.length < 1 ){
        return 
    }
    if (string.length === 1){
        return string[0]
    }
    
    return string[string.length-1] + reverseStr(string)
}







module.exports = {reverseStr}