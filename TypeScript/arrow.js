//Normal function
function Add(x, y) {
    console.log("Addition is:" + (x + y));
}
Add(100, 200);
//Anonymous function -function  with expression
var Sub = function (x, y) {
    console.log("substraction is:" + (x - y));
};
Sub(200, 100);
//Arrow function
var Mul = function (x, y) {
    console.log('multiplication is: ' + (x * y));
};
Mul(100, 200);
