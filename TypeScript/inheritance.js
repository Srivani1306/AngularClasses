var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    Employee.prototype.display = function () {
        console.log("EmpId is: " + this.empId + ",EmpName: " + this.empName + ",empSalary:" + this.empSalary);
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, salary, sub) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.Subject = sub;
        return _this;
    }
    Trainer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Subject is:" + this.Subject);
    };
    return Trainer;
}(Employee));
var fac = new Trainer(109, 'srivani', 100000, 'Angular');
fac.display();
