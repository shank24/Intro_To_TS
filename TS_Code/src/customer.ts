type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let cust = getCustomer(2);

if(cust!==null)
    console.log(cust?.birthday?.getFullYear())