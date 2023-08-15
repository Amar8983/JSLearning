console.log('============step1================');
var greaterNumber=function(num1,num2){
    if (num1>num2) {
        console.log(num1," is greater");
        
    }
    else{
        console.log(num2," is greater");
    }
    
}
greaterNumber(10,-10);
greaterNumber(800,899)

console.log('================step2============');
var numberType=function(value1){
    if (value1%2==0) {
    console.log(`The number: ${value1} is even number`);        
    }
    else
    console.log(`The number: ${value1} is an odd number`);
}
numberType(29);
numberType(44);
numberType(0);
numberType(101);
console.log("===========Step3=========");

var lengthType = function(arg1){
    if (arg1.length%2==0){
        console.log(`The word:${arg1} is even `);
    }
    else
    console.log(`The word:${arg1} is odd`);
}
lengthType("javaScript");
lengthType("developer");
