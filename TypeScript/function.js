var Result;
(function (Result) {
    Result[Result["pass"] = 1] = "pass";
    Result[Result["fail"] = -1] = "fail";
    Result[Result["promoted"] = 0] = "promoted";
})(Result || (Result = {}));
function student() {
    //normal types
    var stdId = 101;
    var stdName = 'srivani';
    var stdStatus = true;
    //complex types
    var marks = [23, 56, 45, 34, 56];
    var total = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var item = marks_1[_i];
        total += item;
    }
    var avg = total / 5.0;
    var subjects = ['html', 'css', 'spring', 'angular'];
    var dob = [27, 'manu', 2017];
    var eResult = Result.pass;
    this.eResult = function () {
        if (avg >= 35) {
            return Result.pass;
        }
        else {
            return Result.fail;
        }
    };
}
//calling the class
var std = new student;
console.log(std.eResult());
console.log(Result[std.eResult()]);
