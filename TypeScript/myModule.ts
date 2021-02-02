export class Employee{
    constructor(private firstname:string,private lastname:string){

    }

    showdetails():string{
        return this.firstname+" "+this.lastname;
    }
}


export class Student{
    constructor(private sname:string,private marks:number){

    }

    display(){
        console.log('student name is:'+this.sname)
        console.log('student marks is:'+this.marks)
    }
}