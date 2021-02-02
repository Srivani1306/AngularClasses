interface I1{
    Add(x:number,y:number);
}

interface I2{
    Sub(x:number,y:number);
}

class Arthemetic implements I1,I2{
    Add(x: number, y: number) {
        console.log(`Addition is: `+(x+y))
    }

    Sub(x: number, y: number) {
        console.log(`Addition is: `+(x-y))
    }
    
}

let x:Arthemetic;
x=new Arthemetic();
x.Add(100,200);
x.Sub(200,100);