var Arthemetic = /** @class */ (function () {
    function Arthemetic() {
    }
    Arthemetic.prototype.Add = function (x, y) {
        console.log("Addition is: " + (x + y));
    };
    return Arthemetic;
}());
var x;
x = new Arthemetic();
x.Add(100, 200);
