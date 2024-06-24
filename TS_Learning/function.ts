export {}

//Definition
function addition(num1: number, num2: number): number;
//b as Optional Param
function addition(a: string, b?: string): string;

//Implementation

function addition(a: any, b: any): any {
    if (b)
        return a + b;
    else
        return a;
}

console.log(addition(1, 2));
console.log("trt");
console.log("Malgudi", "Days");