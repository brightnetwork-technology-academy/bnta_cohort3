# Exercise - FizzBuzz

In this exercise you'll be looking at [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz), a game designed to help kids learn about division. It's also a very common coding problem used in technical interviews as it lets developers demonstrate their knowledge of some fundamental concepts. The aim of the game is simple: players take it in turns to say a number, replacing the number with "fizz" if it divisible by 3, "buzz" if it's divisible by 5 and "fizzbuzz" if divisible by both. The sequence of numbers would be:

```
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
...
```

Your task is to write a JavaScript function called `fizzBuzz` that will take a number as an argument and return the appropriate response, eg. `fizzBuzz(3)` should return `"fizz"`. You will also need to write tests for your function using Jest.

A start point has been provided with a file for your function and a file for your tests. You will need to install any necessary libraries. When writing your tests remember to consider:

- Have you tested all possible return values?
- Have you tested multiple inputs for the same expected return value?
- Have you tested some extreme values?

Once you have written some tests and they are passing, consider if there are any ways in which you could refactor your code.

Finally, you could try making a new file called `fizzbuzz100.js`. In that file try to print out the result of calling `fizzBuzz(n)` for every value of `n` up to 100.
