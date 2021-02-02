class Employee{
    empId:number;
    empName:string;
    empSalary:number;

    constructor(empId:number,empName:string,empSalary:number = 12000){
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }

    display(){
        console.log(`EmpId is: ${this.empId},EmpName: ${this.empName},empSalary:${this.empSalary}`)
    }
}

let emp3:Employee = new Employee(101,'srivani')
emp3.display();

let emp4:Employee = new Employee(101,'srivani',101000)
emp4.display();