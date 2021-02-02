var Employee1 = /** @class */ (function () {
    function Employee1(empId, empName, empSalary) {
        if (empSalary === void 0) { empSalary = 12000; }
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    Employee1.prototype.display = function () {
        console.log("EmpId is: " + this.empId + ",EmpName: " + this.empName + ",empSalary:" + this.empSalary);
    };
    return Employee1;
}());
var emp3 = new Employee1(101, 'srivani');
emp3.display();
var emp4 = new Employee1(101, 'srivani', 101000);
emp4.display();
