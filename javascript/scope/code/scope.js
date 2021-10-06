numbers = [1,2,3,4,5]

// Global Scope

for (number of numbers) {
    console.log("value of number inside loop:", number);
}

console.log("value of number outside loop:", number);


// Block Scope

let numberToPrint;

for (let number of numbers) {
    numberToPrint = number
    console.log("value of numberToPrint inside loop:", numberToPrint);
}

console.log("value of numberToPrint outside loop:", numberToPrint);


// Modifying a constant array

const numbersSquared = [];

for (const number of numbers) {
    numbersSquared.push(number ** 2);
}

console.log(numbersSquared);
