class Employee{
    empId:number;
    empName:string;
    empSalary:number;

    constructor(empId:number,empName:string,empSalary?:number){
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }

    display(){
        console.log(`EmpId is: ${this.empId},EmpName: ${this.empName},empSalary:${this.empSalary}`)
    }
}

let emp1:Employee = new Employee(101,'srivani')
emp1.display();

let emp2:Employee = new Employee(101,'srivani',101000)
emp2.display();
