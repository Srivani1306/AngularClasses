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
    function Employee(empId, empName, basicSalary) {
        this.empId = empId;
        this.empName = empName;
        this.basicSalary = basicSalary;
    }
    Employee.prototype.display = function () {
        console.log("EmpId is: " + this.empId + ",EmpName: " + this.empName + ",basicSalary:" + this.basicSalary);
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(empId, empName, basicSalary, subject) {
        var _this = _super.call(this, empId, empName, basicSalary) || this;
        _this.subject = subject;
        return _this;
    }
    Trainer.prototype.calculateSalary = function (hrs) {
        var salary;
        salary = this.basicSalary * hrs + (this.basicSalary * hrs) * 2.5 / 100;
        console.log('updated salary of trainee:' + salary);
    };
    Trainer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log('subject is: ' + this.subject);
    };
    return Trainer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(empId, empName, basicSalary, adminrole) {
        var _this = _super.call(this, empId, empName, basicSalary) || this;
        _this.adminrole = adminrole;
        return _this;
    }
    Admin.prototype.calculateSalary = function (hrs) {
        var salary;
        salary = this.basicSalary * hrs + (this.basicSalary * hrs) * 1.5 / 100;
        console.log('updated salary of admin:' + salary);
    };
    Admin.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log('admin role : ' + this.adminrole);
    };
    return Admin;
}(Employee));
/* let trainee:Trainer;
 trainee= new Trainer(101,'srivani',100000,'typescript')
 trainee.display()
 trainee.calculateSalary(10)

 let adm :Admin;
 adm = new Admin(101,'srivani',100000,'sheduleclass')
 adm.display()
 adm.calculateSalary(10)*/
//function based programming
function test(x) {
    var emp;
    if (x == 1) {
        emp = new Trainer(101, 'srivani', 100000, 'typescript');
    }
    else if (x == 2) {
        emp = new Admin(101, 'srivani', 100000, 'sheduleclass');
    }
    emp.display();
    emp.calculateSalary(10);
}
test(1);
test(2);
