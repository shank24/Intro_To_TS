let sales: number = 123_456_789;
let course: string = 'TS';
let is_clear: boolean = true;

//Enum
enum Size {Small=1, Medium, Large};
let mySize : Size = Size.Medium;

console.log(mySize);

//Function
function calTax(income:number){
    return 0;
}

//Objects
let emp:{
readonly id:number,
name:string,
retire: (date:Date) => void
} = {
    id:1,
    name:"Shank",
    retire:(date:Date) => {
        console.log(date);
    }
}