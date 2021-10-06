# Functions

Our programs will get more and more complicated as we introduce new concepts and we will find ourselves repeating some chunks of code. This is widely considered to be a Bad Thing, as programmers are generally quite lazy and don't like doing things twice if it can be avoided. We often talk about **DRY** code, where DRY stands for **D**on't **R**epeat **Y**ourself. If we want to keep our code DRY we're going to need some sort of tool to help avoid repetition, which is where functions come into play.

## What is a function?

A **function** is a block of code which performs a specific task. We have already seen code blocks: we use them to define what should happen when conditions are satisfied in an if-statement and we use them to define how we iterated through an array in a for loop. The important difference here is that functions can used anywhere in our programs.

We've been doing this a lot already, we just may not have realised. Think back to the first lesson and the way in which we capitalised a String. 

```js
// node

"Hello World!".toUpperCase();

// "HELLO WORLD!"
```

When we run this program we **call**, or **invoke**, the function `toUpperCase`. We do this by including the parentheses `()` after the name of the function; if we omit the brackets the interpreter will simply tell us that `toUpperCase` is a function. We didn't have to write the code to capitalise our String, we just needed to call it and let the interpreter do the rest. Writing our own functions will enable us to do the same with blocks of code we write.

## Types of Function

Unlike many other programming languges, in JavaScript there are multiple ways in which we can define a function. There is no single "best" way of doing it, but each one has it's own characteristics to be aware of and some will be better-suited than others to certain situations. Create a file to work in and we will see an example of each.

```sh
touch functions.js
```

### Named Functions

The first way to declare a function is to use a **named function**. We use the keyword `function` to indicate that we are declaring a function, then assign a name following the same conventions as a variable. We place parentheses after the function name, then a code block in which we palce the code we want the function to execute. Let's start with a simple example where we print a String to the console.

```js
// functions.js

function greet(){
	console.log("Good morning!");
}

greet();
```

We have called our function `greet` and when we call it we print the String "Good morning!" to the terminal. This will be useful if we want to say good morning a lot, but it only represents a small part of what we can do with functions.

Let's say we want to be a bit more specific with our greeting. We could define a different function to say "good afternoon" or "good evening" but we'd be repeating a lot of code, which wouldn't be very DRY. Instead we can modify our function so that it's behaviour depends on information we give it when we call it.

```js
// functions.js

function greet(timeOfDay){
	console.log(`Good ${timeOfDay}!`);
}

greet("morning");
greet("afternoon");
```
We have added `timeOfDay` to the parentheses in our function definition. This is known as a **parameter** and works in a similar way to the temporary variables we declare in a loop. When we call the function we can provide a value in the parentheses which is then assigned to `timeOfDay` when the code is executed. It only exists inside the function and has block scope. A function can have multiple parameters, if we need it to.

```js
// functions.js

function greet(timeOfDay, name){
	console.log(`Good ${timeOfDay}, ${name}!`);
}

greet("morning", "Alice");
greet("afternoon", "Bob");
```

The values we pass in to the function are known as **arguments**. Unlike other programming languages, a JavaScript function will still run if we provide the incorrect number of arguments. Any extras will be ignored, while any missing will be `undefined` inside the function.

```js
greet("morning", "Alice", "extra argument");
// "Good morning, Alice!"

greet("afternoon");
// "Good afternoon, undefined!"
```

Anything that happens in the function stays in the function at the moment. So long as we are just logging things that's not a problem, but if we start manipulating variables in any sort of way we're going to want to get the results back out. We can do this using the `return` keyword.

```js
function greet(timeOfDay, name){
	return `Good ${timeOfDay}, ${name}!`
}

const greeting = greet("morning", "Alice");

console.log(greeting);
```  

Now we can use functions to perform complex logic and give us the resulting value(s) anywhere in our code!

There is one more quirk of named functions we need to see. Try moving the function declaration to the bottom of the file, then running it.

```js
const greeting = greet("morning", "Alice");

console.log(greeting);

function greet(timeOfDay, name){
	return `Good ${timeOfDay}, ${name}!`
}
``` 

It still runs! But how? Surely we shouldn't be able to call a function which hasn't been declared yet? The way the JavaScript interpreter works makes this possible though, through a process called **hoisting**. The interpreter scans through the file to discover which variable names and function names are present in the program and "hoists" them to the top of the file. This makes them accessible earlier than they would be otherwise, making it possible to call the function before it is defined.


### Anonymous Functions

Functions are **first-order objects**, just like everything else in JavaScript. That means anything we could do with any other type of object, such as adding them to an array or assigning them to a variable, can be done with functions too.

Functions like these are known as **anonymous functions**. They are still declared using the `function` keyword but we don't give them a name (hence "anonymous").

```js
// functions.js

function(number1, number2){
	return number1 + number2;
}
```

This does present an issue though: we're right back where we started when we typed "Hello World!" into Node and we weren't able to reuse it. By naming the function we made it possible to call the function from elsewhere. There's a solution at hand though and it means leveraging the fact the function is a first-order object. We assign our function to a variable which we can then use to call our function elsewhere.

```js
// functions.js

const sum = function(number1, number2){
	return number1 + number2;
}

total = sum(1, 2);

console.log(total);
```

Unlike named functions, anonymous functions can't be hoisted. Try moving the function call above the declaration and you'll see we get an error message when we try to run it. It might seem strange to be able to declare a function which we apparently can't use anywhere else, but they have their uses. Another benefit of functions being first-order is that we can pass them into other functions and use them for tasks such as filtering. Functions passed as arguments like this are known as **callbacks** and we'll look at them in more detail in a future lesson.


### Arrow Functions

The third type of function declaration is the **arrow function**. These don't even need the `function` keyword, but the structure of the declaration marks them out as functions to the interpreter. They are similar to anonymous functions in that they can be assigned to variables and called from elsewhere.

Instead of using `function`, we place an "arrow" between the parameters and the function body as shown. The function returns a value and is called just as before.

```js
// functions.js

const multiply = (number1, number2) => {
    return number1 * number2;
}

const product = multiply(2, 5);

console.log(product);
```

The unique feature of arrow functions is the **implicit return**. In named and anonymous functions, and in arrow functions structured as they are above, we have to use the `return` keyword to get information back from the function. If we bring the body of the function onto a single line, we can omit this and the braces and still get our value back.

```js
// functions.js

const multiply = (number1, number2) => number1 * number2

const product = multiply(2, 5);

console.log(product);
```

Using arrow functions like this lets us streamline our code a little, but limits us to simple, single-line expressions.