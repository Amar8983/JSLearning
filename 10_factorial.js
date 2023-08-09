// 5! = 1 * 2 * 3 * 4 * 5

 
var factorial=function(num1){

    let result = 1; // 3 
    
    for (let index = 1; index <= num1; index++) {
    
        result = result * index;
    
    }
    //console.log(`Factorial of 5 is ${result}`);
    return result;

}


let factorialValue=[5,9,7,11,12];
for (let i = 0; i < factorialValue.length; i++) {
    console.log(`The Factorial of ${factorialValue[i]}: ${factorial(factorialValue[i])}`);
} 

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7







var fact = 1;

function factorial(num){

    // 5 * 4 * 3 * 2 * 1

   if(num==1) {

    return fact;

   } else {

    fact = num * factorial(num-1); //5 * 4 * 3 * 2 * 1

   } 

}

factorial(5);

console.log(`Factorial using recursion is: ${fact}`);