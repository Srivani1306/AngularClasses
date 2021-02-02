/*function getelements(elements:number[]):number[]{
    return new Array().concat(elements)
}*/

//same function write like this with generics
function getelements<T>(elements:T[]):T[]{
    return new Array().concat(elements)
}

let number_concat = getelements<number>([10,20,30]);
console.log(number_concat);

let string_concat = getelements<string>(['srivani','manu','ammu']);
console.log(string_concat)