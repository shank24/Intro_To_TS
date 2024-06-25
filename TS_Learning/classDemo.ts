class Mobile {

    modelName: string;
    modelNumber: number;

    constructor(modelName: string, modelNumber: number) {
        this.modelName = modelName,
            this.modelNumber = modelNumber
    }

    makeCall(): void {
        console.log("Calling 123");
    }
}

const mobileObject = new Mobile("Oppo", 125);
console.log(mobileObject.modelName);
console.log(mobileObject.modelNumber);
mobileObject.makeCall();