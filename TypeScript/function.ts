enum Result {
    pass = 1,
    fail = -1,
    promoted = 0
}

function student() {
    //normal types
    let stdId: number = 101;
    let stdName: string = 'srivani'
    let stdStatus: boolean = true;

    //complex types
    let marks: number[] = [23, 56, 45, 34, 56]
    
    let total:number=0;
    for(var item of marks){
        total += item;
    }
    let avg = total/5.0;
    
    let subjects: Array<string> = ['html', 'css', 'spring', 'angular']
    let dob: [number, string, number] = [27, 'manu', 2017]

    let eResult:Result = Result.pass;

    this.eResult = function(){
        if(avg>=35){
            return Result.pass;
        }else{
            return Result.fail;
        }
    }
}

//calling the class
var std = new student;
console.log(std.eResult())
console.log(Result[std.eResult()])