//class
var Customer = /** @class */ (function () {
    //constructor
    function Customer(CustomerId, CustomerName, CustomerBal) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
    }
    //method---it is not return anything
    Customer.prototype.Display = function () {
        console.log("Customer Id: " + this.CustomerId + "\n                    Customer Name: " + this.CustomerName + "\n                    Customer Bal: " + this.CustomerBal);
        // console.log("Customer Id: "+this.CustomerId+"\nCustomer Name: "+this. CustomerName+"\nCustomer Bal: "+this. CustomerBal)
    };
    //function----it return something
    Customer.prototype.Deposit = function (amt) {
        this.CustomerBal = this.CustomerBal + amt;
        return this.CustomerBal;
    };
    return Customer;
}());
//object
var cust = new Customer(101, "srivani", 10000000);
cust.Display();
console.log(cust.Deposit(2000));
