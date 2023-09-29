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
const employeeTcs = arrayEmployee.filter((employee)=> {

    return employee.emp_company==='TCS';

  });

  console.log(employeeTcs);

  for (const employee of employeeTcs) {

    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);

  }

 

  console.log("===== Find the TCS employees and get the list of employee names only ======");

  const tcsEmployees = arrayEmployee.filter((employee)=> {

    return employee.emp_company==='TCS';

  });

  const employeeTcsNames = tcsEmployees.map((employee)=> {

    return employee.emp_name;

  });

  console.log(employeeTcsNames);

 

  console.log(`*************methodchaining es6 (useing multiple method)**************`);

  arrayEmployee.filter(employee=> employee.emp_company==='TCS')

  .map(employee =>  employee.emp_name)

  .forEach(empName => console.log(empName));

  console.log(`===================avarage salary of wipro==================================`);
  const wiproEmployees = arrayEmployee.filter((employee)=> {

    return employee.emp_company==='wipro';

  });

  let salarysum = 0;
  for (const employee of wiproEmployees) {
    salarysum=salarysum+employee.emp_salary;
  }
  console.log(`avarage salary of wipro employees ${salarysum/wiproEmployees.length}`);

  console.log(`================================avarage salary of info & wipro=======================`);
  const wiproinfoEmployees = arrayEmployee.filter((employee)=> {

    return employee.emp_company==='wipro'||employee.emp_company===`infy`;

  })
  console.log(wiproinfoEmployees);
  let salarysum1 = 0;
  for (const employee of wiproinfoEmployees) {
    salarysum1=salarysum1+employee.emp_salary;
    
  }
  console.log(`avarage salary of wipro and infy  employees ${salarysum1/wiproinfoEmployees.length}`);




