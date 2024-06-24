"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var credential = {
    "user": "admin",
    "password": "123"
};
var submitForm = function (arg) {
    console.log(arg.user);
    console.log(arg.password);
};
submitForm(credential);
