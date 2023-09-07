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

const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
const studantNames = arrayEmployee.map((Employee)=>{
    return Employee.emp_name;
})
console.log(studantNames);
console.log(`=======================================Deparment===============================================`);
const deparmentArray = arrayEmployee.map((Employee)=>{
    return Employee.emp_dept;
})
console.log(deparmentArray);
console.log(`=====================================Employee id's=============================================`);
const employeeId = arrayEmployee.map((Employee)=>{
    return Employee.emp_id;
})
console.log(employeeId);