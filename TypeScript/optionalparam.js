var Employee = /** @class */ (function () {
    function Employee(empId, empName, empSalary) {
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    Employee.prototype.display = function () {
        console.log("EmpId is: " + this.empId + ",EmpName: " + this.empName + ",empSalary:" + this.empSalary);
    };
    return Employee;
}());
var emp1 = new Employee(101, 'srivani');
emp1.display();
var emp2 = new Employee(101, 'srivani', 101000);
emp2.display();
