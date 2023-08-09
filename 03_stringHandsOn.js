var stringHandsON = "   HEY you are doing good, keep it up   "
var stringHandsONlength = stringHandsON.length;
console.log(stringHandsON,`length of string is ${stringHandsONlength}`);
var result = stringHandsON.trim();
console.log(`Before Trim String length : ${stringHandsON.length},after Trim String is ${result} and it's length is ${result.length}`);
var resultTrimEnd = stringHandsON.trimEnd();
var trimEndLength = stringHandsON.length;
var endSpaces = stringHandsON.length - trimEndLength;
console.log(` End spaces is : ${endSpaces}`);

var charAt0 = result.charAt(0);
var resultlength = result.length;
var charAtLastIndex = result.charAt(resultlength-1);
console.log(`${result} - Char at 0th index is ${charAt0},-Char at last index is ${charAtLastIndex} of inedex is ${result}`);

var result = result.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);




var stringHandsON = "Hey you are doing good ,keep it up";
var result = stringHandsON.slice(17,22);
console.log(`Slice from index 17 till 22 is : ${result}`);

var result = stringHandsON.substring(22);
console.log(`substring starting from index is: ${result}`);

var result = stringHandsON.includes("up")
console.log(`string Ends with up character : ${result}`);

var result = stringHandsON.includes("Hey")
console.log(`string start with Hey character :${result}`);