var Arthemetic = /** @class */ (function () {
    function Arthemetic() {
    }
    Arthemetic.prototype.Add = function (x, y) {
        console.log("Addition is: " + (x + y));
    };
    Arthemetic.prototype.Sub = function (x, y) {
        console.log("Addition is: " + (x - y));
    };
    return Arthemetic;
}());
var x;
x = new Arthemetic();
x.Add(100, 200);
x.Sub(200, 100);
