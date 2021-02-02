/*function getelements(elements:number[]):number[]{
    return new Array().concat(elements)
}*/
//same function write like this with generics
function getelements(elements) {
    return new Array().concat(elements);
}
var number_concat = getelements([10, 20, 30]);
console.log(number_concat);
var string_concat = getelements(['srivani', 'manu', 'ammu']);
console.log(string_concat);
