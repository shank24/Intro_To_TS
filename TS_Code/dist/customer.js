"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let cust = getCustomer(2);
if (cust !== null)
    console.log((_a = cust === null || cust === void 0 ? void 0 : cust.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=customer.js.map