function show(){
    console.log('====================No Parameter No Return Type==================================================');
    console.log('Technology Stack for Angular Web Devlopment');
    console.log('Technology - HTML5+CSS Bootstrap Javascript Typescript Angular');
    console.log('Tools - GIT+GITHUB AGILE+JIRA');
}
show();

console.log('===============================personalDetails=================================================');

function personalDetails(arg1,arg2,arg3){
    console.log(arg1,arg2,arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = personalDetails('first Name : Amar','Last Name : Maurya','Collage Nmae : AEC Chikhli');

console.log('==========================================swapValues==========================================')

var value1 = "Virat";
var value2 = "Anushka";
console.log('Before Swap',"value1:",value1,"value2:",value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log('After Swap',"value1:",value1,"value2:",value2);

console.log('================================addThreeValues================================================');
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var result = addition(10.23, 600, 40);
console.log('Result is ', result);
var resultValue = addition('Hello','Good','Morning');
console.log('Result is', resultValue);
console.log('========================================bankDetails=========================================');
function bankDetails(arg1,arg2,arg3,arg4){
console.log(arg1,arg2,arg3,arg4);
var result = arg1 + arg2 + arg3 + arg4;
return result;

}
var result = bankDetails('Bank Name : Citibank', 'Bank Account Number : 3456782345', 'Location : Pune' ,'Pin Code : 431202' );
var result = bankDetails('Bank Name: AXIS','Bank Account Number : 6667980857','Location : Mumbai', 'Pin Code : 441202');
var result = bankDetails('Bank Name: HDFC','Bank Account Number : 8956782345','Location : Pune', 'Pin Code : 631202');