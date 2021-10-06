# Loops

Often we want to perform a task more than once. Exactly how often can vary: sometimes we want to keep doing something until something specific happens, other times we want to do something to all items in a particular group. In JavaScript we can do this using **loops**.

## The `for` Loop

Now that we have arrays to store lots of data in we need to think about how we can manipulate all that data more efficiently. If we are performing the same actions over and over again it would be possible to do so by pulling each element out of the array, doing whatever it is we want to do then sticking it back in. That's not very efficient though, since we need to write the same code over and over for each elememt.

The **for** loop speeds things up for us by letting us write the code once and apply it to each element in turn. Let's consider our shopping list again:

```sh
touch for_loops.js
```

```js
//for_loops.js

shoppingList = ["milk", "eggs", "bread", "apples", "coffee", "biscuits"];
```

If I want to print out each item in my list it's going to take a while...

```js
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
// ...
```

That's going to take a while, plus we need to know how many items we have on our shopping list so that we can stop in time. If we want to do anything more complex than simply printing the item it becomes even less efficieint. By using a for loop we can cut this process down so that we only need to write the code once, then have it executed for every element in the list.

JavaScript has a built-in algorithm to achieve this in the form of the **for-of** loop. We declare a temporary variable which we the interpreter sets equal to the next thing in our array then define what we want to do to it. After the code block is complete it is repeated for the next thing in the array until there are no elements left. No we can print out list in three lines of code, regardless of how many items are on it.

```js
// for_loops.js

for (item of shoppingList) {
    console.log(item);
}
```

In this loop `item` could be called whatever we want, but it's good practice to make it relevant to what's being looped over. Since it represents a String here we can call String methods on it, for example:


```js
// for_loops.js

for (item of shoppingList) {
    console.log(item.toUpperCase());
}
```


### The Classic `for` Loop

Every language has the concept of a for loop but not all have a structure like the for-of loop. Most use a longer form which is also available to us in JavaScript known as the **classic for loop**. It's more complicated to set up but gives us much finer control over how we iterate through our arrays. WEspecify the code to run as before, but now we also need to declare three pieces of information to set up the loop:

- a variable to use as a counter
- a maximum/minimum value of that counter 
- an expression to increment the counter after each iteration

To print our list as before the loop looks like this:

```js
// for_loops.js

for (index = 0; index < shoppingList.length; index++) {
    console.log(shoppingList[index]); 
}
```

This is a lot more code to achieve the same thing, but the power of the classic for loop comes from being able to limit how far through the list we go, reverse it or even skip some entries!

```js
// for_loops.js

// Setting a different maximum for the counter limits how many iterations we make

for (index = 0; index < 3; index++) {
    console.log(shoppingList[index]); 
}
```

```js
// for_loops.js

// Starting the counter at the last index in the array, giving it a minimum and telling the loop to count down lets us reverse the array

for (index = shoppingList.length - 1; index >= 0; index--) {
    console.log(shoppingList[index]); 
}
```

```js
// for_loops.js

// Changing the value we increment the counter by lets us skip some iterations.

for (index = 0; index < shoppingList.length; index+=2) {
    console.log(shoppingList[index]); 
}
```


## The `while` Loop

The partner to the for loop is the **while** loop. Unlike for loops they aren't used to do the same thing to multiple values, instead they are used to run the same code over and over until some condition is satisfied. 

We have already seen with if-statements that we can force our programs to execute particular blocks of code based on an expression evaluating to be `true`. Whle loops work on the same principle, but with the key difference that instead of moving on once the code has run they check the expression again and repeat the code block if it's still `true`. Take this example of a program which will count up to 10 then stop.

```sh
# terminal

touch while_loops.js
``` 

```js
//while_loops.js

counter = 0;

while (counter < 10){
	counter++;
	console.log(counter);
}
```

Here we declare a variable called `counter` and compare it to our maximum value in the condition. Every time we run the code the counter is incremented until eventually the expression is `false` and the program ends. We need to take care here as we can very easily introduce an *infinite loop* into our programs, ie. a situation where a block of code is run over and over again with no way of terminating until the computer runs out of memory. Try it now by removing the `counter++` line from inside the braces (press `ctrl` + `c` to terminate the process once you see what's going on).

While loops are often used in programming to "pause" a program while waiting for an external process to complete, for example a user making a selection from a menu. We can break out of a such a loop at any point by using the `break` keyword. In the example below we generate random numbers until we get one greater than 0.8, at which point we break out of the loop.

```js
// while_loops.js

while (true) {
    rand = Math.random();
    console.log(rand);
    if (rand > 0.8){
        break;
    }
}
```