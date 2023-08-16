const input = [
    { brand: "BMW", model: "320i", kw: 120 },
    { brand: "Mercedes", model: "C 200", kw: 134 },
    { brand: "Renault", model: "Laguna", kw: 97 },
    { brand: "Toyota", model: "Yaris", kw: 52 },
    { brand: "Ford", model: "Kuga", kw: 85 },
    { brand: "Volvo", model: "V60", kw: 111 },
    { brand: "Audi", model: "A3", kw: 123 },
    { brand: "VW", model: "Golf ", kw: 106 }
];

let carsMoreKw = [];

function initTask1() {
    sortByKw();
    extractByKw(100);
    outputModels();
}

function sortByKw() {
    input.sort((a, b) => a.kw - b.kw);
    // console.log(input);
};

function extractByKw(kw) {
    for (let i = 0; i < input.length; i++) {
        const car = input[i];
        if (car.kw > kw) {
            carsMoreKw.push(car);
        }
    }
    // console.log(carsMoreKw);
}

function outputModels() {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        const car = input[i];
        output += car.brand + " " + car.model;
        if (i != input.length - 1) {
            output += ", ";
        }
    }
    console.log(output);
}