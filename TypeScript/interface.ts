interface I1{
    Sub(arg0: number, arg1: number);
    Add(x:number,y:number);
}

class Arthemetic implements I1{
    Add(x: number, y: number) {
        console.log(`Addition is: `+(x+y))
    }
    
}

let x:I1;
x=new Arthemetic();
x.Add(100,200);