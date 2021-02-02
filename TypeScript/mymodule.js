"use strict";
exports.__esModule = true;
exports.Student = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Employee.prototype.showdetails = function () {
        return this.firstname + " " + this.lastname;
    };
    return Employee;
}());
exports.Employee = Employee;
var Student = /** @class */ (function () {
    function Student(sname, marks) {
        this.sname = sname;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        console.log('student name is:' + this.sname);
        console.log('student marks is:' + this.marks);
    };
    return Student;
}());
exports.Student = Student;
