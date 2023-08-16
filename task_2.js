const arrayOne = ['a', 4, 56, 'q', 'b', 2, 7, 77, 'b', 'x', 1, 'h', 0, 12];
const arrayTwo = [8, 2, 54, 'd', 'g', 3, 'j', 5, 6, 't', 7, 8, 's', 'b', 12, 345];

let arrayNumbers = [];
let uniqueNumbers = [];

function initTask2() {
    extractUniqueNumbers();
    calculateSum();
}

function extractUniqueNumbers() {
    arrayNumbers = arrayOne.filter(e => +e).concat(arrayTwo.filter(e => +e)); // filter all numbers and combine two arrays
    arrayNumbers = arrayNumbers.filter(function(item, pos) { // removes duplicated numbers
        return arrayNumbers.indexOf(item) == pos;
    })
}

function calculateSum() {
    let result = arrayNumbers.reduce((a, b) => {
        return a + b;
    })
    console.log('The result of all the unique numbers is:', result);
}