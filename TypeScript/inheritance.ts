class Employee{
  protected  empId:number;
  protected empName:string;
  protected empSalary:number;

    constructor(id:number,name:string,salary:number){
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }

    display(){
        console.log(`EmpId is: ${this.empId},EmpName: ${this.empName},empSalary:${this.empSalary}`)
    }
}

class Trainer extends Employee{
    protected Subject:string;

    constructor(id:number,name:string,salary:number,sub:string){
        super(id,name,salary)
        this.Subject = sub;
    }

    display(){
      super.display();
      console.log(`Subject is:${this.Subject}`)
    }
}

let fac:Trainer = new Trainer(109,'srivani',100000,'Angular')
fac.display();
