const arrayNums=[20,3,4,56,90,400,49]
let arrayNums2=arrayNums
console.log("=======================Cloned Array -- Shallo Copy ============================");

console.log("Cloned Array : ",arrayNums2);
console.log("=======================Array Before updation============================");
console.log("Parent Array ",arrayNums);
console.log("Clone Array ",arrayNums2);

arrayNums2.push(55)
arrayNums2.push(66)
console.log("=======================Array after updation /pushing the new values============================");
console.log("Parent Array ",arrayNums);
console.log("Clone Array ",arrayNums2);


console.log("=======================Deep Copy============================");

const arrayNums3=[1,2,3,4,5,6]
let arrayNums4=[...arrayNums3]
console.log(typeof arrayNums4);
console.log("=======================Deep Clone Array============================");
console.log("Deep Cloned Array",arrayNums4);
//arrayNums3.
arrayNums4.push(10)
arrayNums4.push(25)
console.log("=======================Array after updation /pushing the new values============================");
console.log("Parent Array ",arrayNums3);
console.log("Deep Clone Array ",arrayNums4);


let arrayEven=[2,30,14,8]
let mergeArray=[...arrayEven,...arrayNums]
console.table(mergeArray);

let employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR"
    },
    address:{
        locality:{
            colony:"Om Vridavan Society",
            street:"Kanch Pokli,431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobile:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}

console.table(`Address of the Employee is: Locality ==> Colony ${employee_info.address.locality.colony}, City : ${employee_info.address.locality.city} ,State : ${employee_info.address.locality.state}, Country : ${employee_info.address.locality.country} `);
console.log(`Mobile Number of Employee ==>  ${employee_info.mobile}`);

let deepCopyObject1=JSON.parse(JSON.stringify(employee_info.salary));
let deepCopyObject2=JSON.parse(JSON.stringify(employee_info.address));

employee_info.salary.july_month="80,000INR";
employee_info.address.country="United kingdom";

console.log(employee_info.salary.july_month);

console.log(employee_info);
console.log(employee_info.salary.july_month);
console.log(employee_info.address.country);