const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]
const newarraynumber = arrayNumbers.map((currentvalue)=>{
    return currentvalue+10
})
console.log(newarraynumber);

console.log(`=============================cube=====================================================================`);
const cubearraynumber = arrayNumbers.map((currentvalue)=>{
    return currentvalue*currentvalue*currentvalue
})
console.log(cubearraynumber);
console.log(`===========================addindex==================================================================`);
const indexarraynumber = arrayNumbers.map((currentvalue,index)=>{
    return currentvalue+index
})
console.log(indexarraynumber);