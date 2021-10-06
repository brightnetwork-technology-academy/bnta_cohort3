# Control Flow

We've started on the road to writing JavaScript programs, but we can't just start them off and let them run. It's critical that we make sure a program only does things when it's meant to do them. Imagine the chaos if an online shop confirmed everyone's orders without checking if the item was in stock, or if a bank let someone transfer money without being logged in to an account. In our programs we can use **control flow** to make sure certain blocks of code are only executed when certain conditions are met. 

## Checking Equality

Control flow hinges on the evaluation of expressions as being either `true` or `false`. The simplest such expression is checking if two values are the same, ie. if they are **equal** to each other.

However, checking equality in JavaScript is a little more complicated than in everyday life. Firstly we must consider the symbols used. Computers lack the ability to interpret context that humans have and so we cannot afford any ambiguity in the instructions we give. That means that we can't use the equals symbol `=` here, since it is already used for variable assignment.

We can, however, use two of them: `==`. Using this expression will evaluate to `true` if the terms either side of it have the same value and `false` if they don't.

```js
1 == 1
// true

1 == 2
// false

"hello" == "hello"
// true
```

Using `==` can give some strange results though:

```js
1 == "1"
// true
```

Surely that can't be right? As we saw in the last lesson there are things that we can do to numbers that we can't do to Strings and vice versa, so how can these values be equal? It's because JavaScript let's us use **loose equality** to check only the value of an object, ignoring the type. If we want to check the type as well (and we really should) we can add a third equals symbol to check **strict equality**.

```js
1 === "1"
// false

1 === 1
//true
```
We can check more than just equality in this way:

```js
10 > 5
// true

10 < 5
// false

10 >= 10
// true

// Strings are checked according to alphabetical order
"a" > "b"
// false

// uppercase letters are considered to be earlier alphabetically than lowercase
"a" > "A"
// true
```

## Using Equality in a Program

Let's start building a program that will change it's output depending on the value of the variables present.

```sh
touch controlFlow.js
```

We'll build a guessing game that will compare a player's guess to a secret number and let them know if they guessed correctly or not. We won't have any user input here though, instead we'll declare a variable and give it a value to represent their guess.

```js
// control_flow.js

secretNumber = 5;
userGuess = 5;
``` 

The two numbers will be compared using an **if-statement**. Here we will check if some condition is satisfied and if it is the code inside the braces will run.

```js
// control_flow.js

// compare two values
if (userGuess === secretNumber) {
	// if expression is true, run this code
	console.log("Congratulations, you win!");
}
```

Because the two values are the same we see something being printed in the terminal. If we try changing the value of `userGuess` we find that this stops happening, which is great. After all we don't want to tell people they won the game when they guessed incorrectly. It would be nice if we could give them some sort of feedback too though, and we can achieve this using an `else` clause.

```js
// control_flow.js

// compare two values
if (userGuess === secretNumber) {
	// if expression is true, run this code
	console.log("Congratulations, you win!");
} else {
	// if expression is false, run this instead
	console.log("Unlucky, you guessed wrong.");
}
```

Using `if` and `else` like this gives us a great deal of control over how our programs run, but we can go further still. This structure assumes that there are only two possible outcomes but that's often not the case. We can account for this using an `else if` clause.

```js
// control_flow.js

// compare two values
if (userGuess === secretNumber) {
	// if expression is true, run this code
	console.log("Congratulations, you win!");
} else if (userGuess > secretNumber) {
	// if this second expression is true, run this code instead
	console.log("Unlucky, your guess was too high.")
} else {
	// if all expressions above are false run this
	console.log("Unlucky, your guess was too low.");
}
```

## Truthy and Falsy Values

JavaScript engines are capable of performing **type coercion**, ie. they can convert a variable from one type to another if necessary to perform some operation on it. For example, the `+` operator behaves differently for Strings and numbers. If we try to add a String to a number the interpreter needs to decide which version to use and does so by changing the type of one of the objects.

```js
"hello" + 123
// 'hello123'
```

There are limits on when type coercion can be used, but it is always possible to coerce an object into a boolean (`true` or `false`). Objects are said to be **truthy** or **falsy** according to the result of coercing them to a boolean. This is easier to work with in practice than it sounds, as there are only six falsy values:

- `false`
- `0`
- `""` - the empty string
- `NaN` - short for "not a number", typically the result of attempting an impossible mathematical operation
- `undefined` - a value which does not exist in the program, eg. referring to an undeclared variable
- `null` - the value of a variable which has been declared but not yet assigned

Every other value is truthy. This means that instead of checking for equality, which can be quite complex as we introduce more complex data structures, our if-statemetns can check if our object is truthy or falsy. Let's imagine our guessing game also asked the user to input their name. This would be a valid way of checking they had done so correctly:

```js
userName = "Colin"

if (userName) {
	console.log("Welcome to the game " + userName + "!");
} else {
	console.log("You didn't enter a name!");
}
```
