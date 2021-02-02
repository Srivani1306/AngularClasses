var Address = /** @class */ (function () {
    function Address(add, city, state) {
        this.Address = add;
        this.City = city;
        this.State = state;
    }
    return Address;
}());
var Customer = /** @class */ (function () {
    //constructor
    function Customer(CustomerId, CustomerName, CustomerBal, custAdd) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
        this.CustomerAddress = custAdd;
    }
    //method---it is not return anything
    Customer.prototype.Display = function () {
        console.log("Customer Id: " + this.CustomerId + "\n                    Customer Name: " + this.CustomerName + "\n                    Customer Bal: " + this.CustomerBal + "\n                    CustomerCity :" + this.CustomerAddress.City);
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
var add = new Address('malaysia', 'kl', 'selangor');
var cust = new Customer(101, "srivani", 10000000, add);
cust.Display();
console.log(cust.Deposit(2000));
