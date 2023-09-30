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

let arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
const wiproEmployees = arrayEmployee.filter((Employee)=>{
    return Employee.emp_company===`wipro`;
})
console.log(wiproEmployees);
for (const Employee of wiproEmployees) {
    console.log(`wipro employee name : ${Employee.emp_name}`);
    
}
console.log(`===============all employee It or hr dept===========================================`);
const employeesithr = arrayEmployee.filter((Employee)=>{
    return Employee.emp_dept===`IT`|| Employee.emp_dept===`HR`;
})
console.log(employeesithr);
for (const Employee of employeesithr ) {
    console.log(`employee of it and hr deparment : ${Employee.emp_name}`);
    
}
console.log(`===========================id is greater than 50===============================`);
const employeeid = arrayEmployee.filter((Employee)=>{
    return Employee.emp_id>50 || Employee.emp_name>50;
})
console.log(employeeid);
for (const Employee of employeeid) {
    console.log(`Employee id is greater than 50: ${Employee.emp_id} Employee name : ${Employee.emp_name}`);
    
}
console.log(`=================================starts with letter A or v or M ===================================`);
const employeename = arrayEmployee.filter((Employee)=>{
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("v") ||Employee.emp_name.startsWith("m")
})
console.log(employeename);
for (const Employee of employeename) {
    console.log(`Employee name : ${Employee.emp_name}`);
    
}
console.log(`==============================================================================================`);
let departmentAvgSalry={}
for (const emp of arrayEmployee) {
    
  let {emp_salary,emp_dept}=emp;
  

  let empDepartmets=arrayEmployee.filter((emp)=>
     emp.emp_dept===emp_dept

  );
  
  let totalSalary=empDepartmets.reduce((total,emp)=>
    total+emp.emp_salary,0);


  

 
  departmentAvgSalry[emp_dept]= totalSalary/empDepartmets.length
  

  
}
for (const dept in departmentAvgSalry) {
    console.log(`The department ${dept} and avg salary is $${departmentAvgSalry[dept]}`)
}
console.log(`======================================avarage salary of all employes using filter method================================================`);
const avgsalaryallemployee = arrayEmployee.filter((Employee)=>{
   return Employee.emp_salary;
})
console.log(avgsalaryallemployee);
let salarysum = 0;
for (const Employee of avgsalaryallemployee) {
    salarysum=salarysum+Employee.emp_salary;
    console.log(`avarage salary of all employee ${salarysum/avgsalaryallemployee.length}`);
}
console.log(`=============================avarage salary of all employes useing reduce method==========================================================`);
const sumSal = arrayEmployee.reduce((total, employee)=>{
    return total + employee.emp_salary;
},0)

console.log("Average salary of all employees:",sumSal/arrayEmployee.length);
console.log(`===============================find avarage salary of it department====================`);
const salaryofitdepartment = arrayEmployee.filter((Employee)=>{
    return Employee.emp_dept==="IT"
})
let sumit = 0;
for (const Employee of salaryofitdepartment) {
    sumit=sumit+Employee.emp_salary;
    
}
console.log(`avrage salary of it deparetment ${sumit/salaryofitdepartment.length}`);
