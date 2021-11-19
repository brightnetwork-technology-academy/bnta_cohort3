// Shift operator

const myArray = [1, 2, 3, 4, 5];

const otherArray = [...myArray, 99, 88, 77];

otherArray.push(6);

myArray.shift();

// console.log("myArray", myArray);
// console.log("otherArray", otherArray);


// Destructuring Arrays

const array = ["hello", "cohort", "three", "and", "some", "other", "words"];

const [greeting, group, number, ...remainder] = array;

// console.log(array[0]);
// console.log(greeting);
// console.log(group);
// console.log(number);
// console.log(remainder);

let mixedArray = ["hello world", 42, () => console.log("I'm in the array!")];

let [stringInArray, numberInArray, functionInArray] = mixedArray;

// mixedArray[2]();
// functionInArray();


// Destructuring Objects

const myObject = {
    name: "Colin",
    favouriteColour: "green",
    livesIn: "Scotland"
}

const {livesIn, name, favouriteColour} = myObject;

console.log(name);
