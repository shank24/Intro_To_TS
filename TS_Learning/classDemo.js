var Mobile = /** @class */ (function () {
    function Mobile(modelName, modelNumber) {
        this.modelName = modelName,
            this.modelNumber = modelNumber;
    }
    Mobile.prototype.makeCall = function () {
        console.log("Calling 123");
    };
    return Mobile;
}());
var mobileObject = new Mobile("Oppo", 125);
console.log(mobileObject.modelName);
console.log(mobileObject.modelNumber);
mobileObject.makeCall();
