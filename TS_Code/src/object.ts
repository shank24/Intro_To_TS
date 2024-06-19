//Objects
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let emp: Employee = {
    id: 1,
    name: "Shank",
    retire: (date: Date) => {
        console.log(date);
    }
}