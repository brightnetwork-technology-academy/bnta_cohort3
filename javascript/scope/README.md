# Scope

It's an unavoidable reality that as our programs grow it will become harder and harder to manage all of the variables we need. It's hard enough keeping track of names we use at the top level of our program but once we add the temporary variable we use in loops and conditionals into the mix it gets even harder. If we're not careful we could easily reassign something that we didn't mean to.

That's partially because until now we have been ignoring the **scope** of our variables. A variable's scope determines where it can be accessed or reassigned from, or even if it can be reassigned at all. Paying closer attention to it won't solve all of our variable problems (we still have to come up with sensible names on our own) but it will act as a useful guide.

## Global Scope

So far our variables have simply been declared in place in our code. Nothing has broken and nothing will break if we carry on doing this, but there are some unintended side effects. Consider the code below:

```sh
touch scope.js
```

```js
//scope.js

numbers = [1, 2, 3, 4, 5]

for (number of numbers) {
    console.log("value of number inside loop:", number);
}
```

When we run the file the code is executed in exactly the way we would expect: on each iteration a temporary variable called `number` is assigned to the next value from the array before we print out its current value. This temporary variable only exists to facilitate the iteration, it has no purpose outside of the loop. So what happens when we add this line after the loop?

```js
// scope.js

for (number of numbers) {
    console.log("value of number inside loop:", number);
}

console.log("value of number outside loop:", number);
```

We can still access our `number` variable outside of the loop, even though there's no need for it. That's because the variable has been declared in the **global scope**, which means it can be accessed from anywhere in our program. This can sometimes be what we want, but we generally try to avoid it. Making variables global like this can have unintended consequences, especially when we run JavaScript in the browser.

## Block Scope

We can avoid the problem of variables escaping their desired scope by declaring them with a keyword in front of the name. We'll start by looking at `let`. Modify the code from before by adding the `let` keyword before the declaration of `number`.

```js
// scope.js

for (let number of numbers) {
	console.log("value of number inside loop:", number);
}

console.log("value of number outside loop:", number);
```

Now when we run the code we get a different result. The value of `number` is printed from inside the loop as before, but when we get to the outer `console.log` call we see an error telling us `number` is undefined. What's changed?

By using the `let` keyword we have given the `number` variable **block scope**. Now it can only be accessed from within the block in which it was declared, in this instance the for loop. Why is this useful? It means we can reuse variable names throughout our code without worrying about accidentally reassigning a value, which means we can keep things simple when working inside a loop or a function.

## Lexical Scope

Related to the idea of block scope is that of **lexical scope**. If we declare a variable outside of our loop it will remain in scope once we enter the loop. Modify our example as shown below to see this in action:

```js
// scope.js

let numberToPrint = 0;

for (let number of numbers) {
    numberToPrint = number
    console.log("value of numberToPrint inside loop:", numberToPrint);
}

console.log("value of numberToPrint outside loop:", numberToPrint);
```

We don't need to use a keyword before `numberToPrint` inside the loop, we are just reassigning the existing variable. Now we can modify our variable inside the loop but still have access to it once the loop terminates. There are often scenarios where we may need to do this, for example updating a counter which we refer to later. 

Declaring a variable with `let` in this way has an added bonus: we don't need to initialise it immediately. In our example we gave `numberToPrint` an initial value of 0 but we could have omitted this. This would be equivalent to saying `let numberToPrint = null` which is a common pattern in JavaScript when we want to declare a variable as a placeholder but we don't have access to the data yet. 

```js
// scope.js

let numberToPrint;

for (let number of numbers) {
    numberToPrint = number
    console.log("value of numberToPrint inside loop:", numberToPrint);
}

console.log("value of numberToPrint outside loop:", numberToPrint);
```

## Constants

We don't always want to be able to reassign our variables. The `let` keyword has a partner known as `const` which gives our variables the same block scope but which prevents them being reassigned. If we replace `let` with `const` in our example from earlier:

```js
// scope.js

const numberToPrint = 0;

for (let number of numbers) {
    numberToPrint = number
    console.log("value of numberToPrint inside loop:", numberToPrint);
}

console.log("value of numberToPrint outside loop:", numberToPrint);
```

We run into an error as soon as we try to reassign `numberToPrint` thanks to our use of `const`.

When used with an array or an object the behaviour of `const` can seem unusual. In this example we declare `numbersSquared` to be constant and initialise it to be an empty array.

```js
// scope.js

const numbersSquared = [];

for (const number of numbers) {
    numbersSquared.push(number ** 2);
}

console.log(numbersSquared);
```

We are adding things to the array inside the loop but we don't see any errors, and when we `console.log` it after the loop is complete the squared numbers have been added. This is a consequence of the way JavaScript stores arrays in the system memory, which we will discuss in more detail in a future lesson. Objects are behave in a similar way: we can add new keys or even reassign existing ones even if the object itself is declared using `const`. Note that although the array can be modified, the variable `numbersSquared` cannot be reassigned.