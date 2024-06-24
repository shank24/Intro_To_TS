
//Definition
function addition(num1: number, num2: number): number;
function addition(a: string, b: string): string;

//Implementation
function addition(a:any, b:any): any {
    return a + b;
}

console.log(addition(1, 2));
console.log("trt", "pop");