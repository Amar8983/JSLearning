//A E I O U
function vowelCount(str){
    let char = str.charAt(0);
     for (let index = 0; index < str.length; index++) {
         let char = str.charAt(index);
     if (char == "a"|| char == "e" || char == "i"||char == "o"||char == "u"||
     char == "A"|| char == "E"||char == "I"||char == "O"||char == "U"){
         console.log(char);
     }
 
     }
 }
 vowelCount("I am very good UI developer")
 
 
 let sum = function(){
   let totalsum = 0;
   for(let index = 1; index <=5 ; index++){
     if(totalsum = 1*1*1+2*2*2+3*3*3+4*4*4+5*5*5)
     console.log(totalsum,`sum of total number of cube`);
   }
 }
 sum();
 
 function oddPostinedChars(str1){
    let char = str1.charAt(1);
     for (let index = 1; index < str1.length; index=index+2) {
         let char = str1.charAt(index);
     if (index%2!=0 && char!=` `){
         console.log(char);
     }
 
     }
 }
 oddPostinedChars("Hard work always pays back")
 console.log('========================================================================');
 
 function postinedChars(str2){
    let char = str2.charAt(1);
     for (let index = 1; index < str2.length; index=index+2) {
         let char = str2.charAt(index);
     if (index%2!=0 && char!=` `){
        console.log(char);
     }
 
     }
 }
 postinedChars("Soon I will be Angular IT Champ")