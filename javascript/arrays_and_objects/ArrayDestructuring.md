
Arrays and Objects Destructuring
=====
The two most used data structures in JavaScript are `Objects` and `Arrays`.

**Objects** allow us to create a single entity that stores data items by key.

**Arrays** allow to gather data items into an ordered list.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. 

It will be helpful to know array/object destructuring for front-end development in React.js. Destructuring is also very useful to make your code cleaner and easier to work with. It also works with complex functions that have a lot of parameters, default values, and so on.

---

## Destructuring in Arrays

Lets start with the following js code:
```js
// Without array destructuring:
const numbers = [10,20,30,40];

const ten = numbers[0];
const twenty = numbers[1];

console.log(ten); //10
console.log(twenty); //20
```

The above code can be changed to the following using array destructuring:

```js
// Example 1
const [ten, twenty, ...rest] = numbers;
console.log(ten); //10
console.log(twenty); //20
```

Another example:
```js
// Example 2
let a, b;
({ a, b } = { a:10, b:20 });
console.log(a); //10
console.log(b); //20

```
The parantheses (...) around the assignment statement are required when using object literal destructuring assignment without a declaration.

```js
/* The code below is not valid stand-alone syntax as the {a,b} on the left-hand side is considered  a block and not an object literal.
*/

{ a,b } = { a:1, b:2 }
```

---
## Destructuring in Objects

```js
// An example with Objects

const person = {
    name: 'Sally',
    age: 25
};

const name = person.name;
const age = person.age;

const { name, age } = person;

console.log(name); //Sally
console.log(age); //25
```

----
## Combined Array and Object Destructuring

Array and object destructuring can be combined. If you want to extract the third element in the array `props` below, and then you want the `name` property in the object, you do the following:

```js
const props=[
    {id: 1, name: 'Fizz'},
    {id: 2, name: 'Buzz'},
    {id: 3, name: 'Fizzbuzz'}
];

const [ , , {name}]= props;

console.log(name); // Fizzbuzz
```


