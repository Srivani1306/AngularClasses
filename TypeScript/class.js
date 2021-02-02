var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.GetData = function (id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.salary = salary;
    };
    Employee.prototype.Display = function () {
        console.log('EmpID: ' + this.empId);
        console.log('EmpName: ' + this.empName);
        console.log('EmpSalary: ' + this.salary);
    };
    return Employee;
}());
var emp = new Employee();
emp.GetData(101, 'srivani', 12345);
console.log(emp.Display());
