console.log('implicit conversion to string');
result = '3' + 2;
console.log(result); 
console.log('2 is number type is implcity converted to string');

result = '4'- true;
console.log(result);
console.log('true is a boolean value is imlicity converted to string')

result = '3' + undefined;
console.log(result);
console.log('undefined is implicity converted to string');

result = '3' + null;
console.log(result);
console.log('null is imlicity converted to string');

//if boolean is used conversion to Number 

console.log('============================implicit boolean conversion to Number==============');

result = '4'- true;
console.log(result);
console.log('4 is string type converted to number and true is boolean converted to number double conversion implicity ');


result = 4 + true;
console.log(result);
console.log('true is boolean type and it is implicity to number type here true means 1');


result = 4 + false;
console.log(result);
console.log('false is boolean type and it is implicity to number type here true means 0');


console.log('=========================implicit boolean conversion to number=====================');

result = '4' - '2';
console.log(result);
console.log('implicit conversion of numeric string 4 and 2 numbers and then sunbtracted');


result = '4' - 2 ;
console.log(result);
console.log('implicit conversion of numeric string 4 to the number then subtracted from the number 2');


result = '4' * 2;
console.log(result);
console.log('implicit conversion of numeric string 4 to a number then multiply from the number 2');

fire = '4' / 2;
console.log(fire);
console.log('implicit conversion of numeric string 4 to a number then divided by the number 2');








console.log(0=='');
console.log(0=='0');
console.log(0==false);
console.log(null==undefined);
console.log(1==[1]);
console.log(1==true);
console.log(1=='1');
