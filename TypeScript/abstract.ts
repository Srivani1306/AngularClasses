abstract class Employee{
   protected empId:number;
   protected empName:string;
   protected basicSalary:number;

    constructor(empId:number,empName:string,basicSalary:number){
        this.empId = empId;
        this.empName = empName;
        this.basicSalary = basicSalary;
    }

    abstract calculateSalary(hrs:number):void;

    display(){
        console.log(`EmpId is: ${this.empId},EmpName: ${this.empName},basicSalary:${this.basicSalary}`)
    }
}

class Trainer extends Employee{
     public subject;

     constructor(empId:number,empName:string,basicSalary:number,subject:string){
         super(empId,empName,basicSalary)
         this.subject = subject
     }

    calculateSalary(hrs:number):void{
        let salary:number;
        salary = this.basicSalary * hrs + (this.basicSalary*hrs)*2.5/100;
        console.log('updated salary of trainee:' +salary)
    }

    display(){
        super.display();
        console.log('subject is: '+this.subject)
    }
}

class Admin extends Employee{
    public adminrole;
    constructor(empId:number,empName:string,basicSalary:number,adminrole:string){
        super(empId,empName,basicSalary)
        this.adminrole = adminrole;
    }
    calculateSalary(hrs:number):void{
        let salary:number;
        salary = this.basicSalary * hrs + (this.basicSalary*hrs)*1.5/100;
        console.log('updated salary of admin:' +salary)
    }
        
     display(){
         super.display();
         console.log('admin role : '+ this.adminrole)
     }

}

/* let trainee:Trainer;
 trainee= new Trainer(101,'srivani',100000,'typescript')
 trainee.display()
 trainee.calculateSalary(10)

 let adm :Admin;
 adm = new Admin(101,'srivani',100000,'sheduleclass')
 adm.display()
 adm.calculateSalary(10)*/

 //function based programming
 function test(x:number){
     let emp : Employee;
     if(x==1){
         emp =  new Trainer(101,'srivani',100000,'typescript')
     }else if(x == 2){
         emp =  new Admin(101,'srivani',100000,'sheduleclass')
     }
     emp.display()
     emp.calculateSalary(10)
 }
 test(1)
 test(2)