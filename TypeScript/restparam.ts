//Normal function
function Add(x:number,y:number,...restparam:number[]){
    console.log("Addition is:"+(x+y))
}

Add(100,200);
Add(100,200,300);
Add(100,200,300,400);

//Anonymous function -function  with expression
/*let Sub = function(x:number,y:number){
    console.log("substraction is:"+(x-y))
}

Sub(200,100);

//Arrow function
let Mul = (x:number,y:number) => {
    console.log('multiplication is: '+(x*y))
}

Mul(100,200);*/