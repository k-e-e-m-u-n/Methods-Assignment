
//String Methods
let str1 = "Foods"
let str2 = "Drinks"

//Concatenate
let concatenatedStr = `${str1} ${str2}`
console.log(concatenatedStr)

//Slice
let substring = str1.slice(2,5)
console.log(substring);

//Replace
let replacedStr = str2.replace("in","un")
console.log(replacedStr);

//Split
let splitArray = concatenatedStr.split("")
console.log(splitArray);

//Substring
let subStr1 = str1.substring(1,4)
console.log(subStr1);

//Repeat
let repeatedStr = str1.repeat(3)
console.log(repeatedStr);

//Last Index of
let lastIndex = str2.lastIndexOf("ks")
console.log(lastIndex);

//Concat
let finalConcatenation = str1.concat(repeatedStr,str2)
console.log(finalConcatenation);

//Numbers Methods

let num1 = 2.4539
let num2 = 7

//ToFixed
let roundedNum1 = num1.toFixed(3)
console.log(roundedNum1);

//Parseint
let parsedNum1 = parseInt(num1)
console.log(parsedNum1);

//ToString
let stringNum2 = num2.toString()
console.log(stringNum2);
//console.log( typeof stringNum2);

//Mathsqrt
let squareRootNum1 = Math.sqrt(num1)
console.log(squareRootNum1);

//Mathpow
let powerNum2 = Math.pow(num2,3)
console.log(powerNum2);

//Mathceil
let ceiledNum1 = Math.ceil(num1)
console.log(ceiledNum1);

//Mathfloor 
let flooredNum1 = Math.floor(num1)
console.log(flooredNum1);

//Mathabs
let num3 = -5
let absNum3 = Math.abs(num3)
console.log(absNum3);