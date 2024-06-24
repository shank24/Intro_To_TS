export{}

var credential = {
    "user" : "admin",
    "password" : "123"
}

var submitForm = (arg) => {
    console.log(arg.user);
    console.log(arg.password);
}

submitForm(credential);