// Named Function

const greeting = greet("morning", "Alice");

console.log(greeting);

function greet(timeOfDay, name){
    return `Good ${timeOfDay}, ${name}!`;
}


// Anonymous Function

const sum = function(number1, number2) {
    return number1 + number2;
}

const total = sum(1,2);

console.log(total);



// Arrow Function

const multiply = (number1, number2) => number1 * number2;

const product = multiply(2, 5);

console.log(product);