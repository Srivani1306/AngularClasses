let x:number = 10;
let y:string = "welcome to typescript";
let z:boolean = true;

//var result:string = "value of x :"+x+"\n value of y :"+y+"\nvalue of z :"+z;

var result:string = `value of x :${x}
                     value of y :${y}
                     value of z :${z}`;
console.log(result);