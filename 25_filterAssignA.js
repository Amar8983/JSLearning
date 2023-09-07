const arrayNumbers =[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const newarrayNumbers = arrayNumbers.filter((currentvalue) =>{
    return currentvalue>50
})
console.log(newarrayNumbers);
console.log(`=====================even numbers================================================`);
const evenarrayNumbers = arrayNumbers.filter((currentvalue)=>{
    return currentvalue%2==0
})
console.log(evenarrayNumbers);
console.log(`=====================odd numbers================================================`);
const oddarrayNumbers = arrayNumbers.filter((currentvalue)=>{
    return currentvalue%2==1
})
console.log(oddarrayNumbers);
console.log(`======================Multiple of 5==============================================`);
const multiplyarrayNumbers = arrayNumbers.filter((currentvalue)=>{
    return currentvalue%5==0
})
console.log(multiplyarrayNumbers);
console.log(`======================Value Between 20 to 50=====================================`);
const valuearrayNumbers = arrayNumbers.filter((currentvalue)=>{
    return currentvalue>=20 && currentvalue<=50
})
console.log(valuearrayNumbers);