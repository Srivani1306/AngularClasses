//class
class Customer{
    CustomerId:number;
    CustomerName:string;
    CustomerBal:number;

    //constructor
    constructor(CustomerId:number,CustomerName:string, CustomerBal:number){
      this. CustomerId = CustomerId;
      this. CustomerName = CustomerName;
      this. CustomerBal = CustomerBal;
    }

    //method---it is not return anything
    Display():void{
        console.log(`Customer Id: ${this.CustomerId}
                    Customer Name: ${this. CustomerName}
                    Customer Bal: ${this. CustomerBal}`);

                   // console.log("Customer Id: "+this.CustomerId+"\nCustomer Name: "+this. CustomerName+"\nCustomer Bal: "+this. CustomerBal)
    }

    //function----it return something
    Deposit(amt:number):number{
        this.CustomerBal = this.CustomerBal+amt;
        return this.CustomerBal;
    }
}

//object
var cust = new Customer(101,"srivani",10000000);
cust.Display();
console.log(cust.Deposit(2000));