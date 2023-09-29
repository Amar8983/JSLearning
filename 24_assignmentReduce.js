const arraynumbers = [20,11,40,25,37,49,9,90,60,2,19]
const  totalarray = arraynumbers.reduce((totalsum, currentvalue)=>{
    return totalsum+currentvalue;
})
console.log(`totalsum array for given array : ${totalarray}`);

console.log(`=====================================find the numbers multiple of 5 and then sum it==============`);

const dividearray = arraynumbers.filter((currentvalue)=>{
    return currentvalue%5==0
})
console.log(dividearray);
const arrayvalue = dividearray.reduce((totalsum, currentvalue)=>{
    return totalsum+currentvalue;
})
console.log(`total sum of array ${arrayvalue}`);