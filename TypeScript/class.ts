class Employee{
    empId:number;
    empName:string;
    salary:number;

    GetData(id:number,name:string,salary:number){
        this.empId = id;
        this.empName = name;
        this.salary = salary;
    }

    Display(){
        console.log('EmpID: '+this.empId);
        console.log('EmpName: '+this.empName);
        console.log('EmpSalary: '+this.salary);
    }

}

var emp:Employee = new Employee()
    emp.GetData(101,'srivani',12345);
    console.log(emp.Display())
