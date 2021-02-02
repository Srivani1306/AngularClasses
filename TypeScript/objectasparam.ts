class Address{
    Address:string;
    City:string;
    State:string;

    constructor(add:string,city:string,state:string){
        this.Address = add;
        this.City = city;
        this.State = state;
    }
}

class Customer{
    CustomerId:number;
    CustomerName:string;
    CustomerBal:number;
    CustomerAddress : Address;

    //constructor
    constructor(CustomerId:number,CustomerName:string, CustomerBal:number,custAdd:Address){
      this. CustomerId = CustomerId;
      this. CustomerName = CustomerName;
      this. CustomerBal = CustomerBal;
      this.CustomerAddress = custAdd;
    }

    //method---it is not return anything
    Display():void{
        console.log(`Customer Id: ${this.CustomerId}
                    Customer Name: ${this. CustomerName}
                    Customer Bal: ${this. CustomerBal}
                    CustomerCity :${this.CustomerAddress.City}`);

                   // console.log("Customer Id: "+this.CustomerId+"\nCustomer Name: "+this. CustomerName+"\nCustomer Bal: "+this. CustomerBal)
    }

    //function----it return something
    Deposit(amt:number):number{
        this.CustomerBal = this.CustomerBal+amt;
        return this.CustomerBal;
    }
}

//object
var add = new Address('malaysia','kl','selangor')
var cust = new Customer(101,"srivani",10000000,add);
cust.Display();
console.log(cust.Deposit(2000));