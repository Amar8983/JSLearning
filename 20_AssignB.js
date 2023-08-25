class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil" ,"IT",50000, "TCS");
const emp_radha = new Employee(33, "Radha" ,"HR",74000,"wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"sonali","Finance",45000,"infy");
const emp_monika = new Employee(77,"monika","IT",40000, "wipro");
const emp_viny = new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99, "mahesh","HR",85000,"infy");

console.log("=================================step1=============================================================================");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];{
    for (const Employee of arrayEmployee) {
        if (Employee.emp_company==`TCS`) {
            console.log(`Employee name : ${Employee.emp_name}, company name : ${Employee.emp_company}`);     
        }
    }
}
console.log("==============================step2======================================================================================");

    for (const Employee of arrayEmployee) {
        if (Employee.emp_dept==`Finance`) {
            console.log(`Employee dept : ${Employee.emp_dept}, Employee name : ${Employee.emp_name}`);     
        }
    }
console.log("==========================step3===============================================================================================");

    for (const Employee of arrayEmployee) {
        if (Employee.emp_name.startsWith(`R`)) {
            console.log(`Employee name : ${Employee.emp_name}, company deparment : ${Employee.emp_dept}`);     
        }
    }
console.log("===========================step4========================================================================================");
    for (const Employee of arrayEmployee){
        if(Employee.emp_salary > 75000){
            console.log(`Employee name : ${Employee.emp_name} ,company name : ${Employee.emp_company}, salary : ${Employee.emp_salary}`);
        }
    }
console.log("=======================step5================================================================================================");
    for (const Employee of arrayEmployee){
        if(Employee.emp_salary>=50000 && Employee.emp_dept==`IT`){
            console.log(`Employee Dept : ${Employee.emp_dept} , Employee Id : ${Employee.emp_id} ,Employee name : ${Employee.emp_name}, company name : ${Employee.emp_company}, salary : ${Employee.emp_salary}`);
        }
    }
console.log("==================step6============================================================================================");
    for (const Employee of arrayEmployee){
        if(Employee.emp_company == `infy`){
            console.log(`Employee Dept : ${Employee.emp_dept}, Employee Id : ${Employee.emp_id}, Employee name : ${Employee.emp_name}, company name : ${Employee.emp_company}, salary : ${Employee.emp_salary}`);    
        }
    }
    

     
        
    
