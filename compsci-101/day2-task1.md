# Day 2, Morning
## Understanding Big O Notation properly - 1 hr!
Big O is a really abstract way to label the performance of an algorithm. You might be thinking to yourself, why don't we measure algorithm performance in a concrete unit like time (milliseconds)?

Great question, let's play with some code and see for ourselves.

We're going to make 4 functions executing various algorithms and then benchmark their performance, measuring how many milliseconds each one took to execute.

Try and search how to measure execution time yourself first, this is so you get practice using technical language to search for a solution on the internet. If you're having trouble though, [Here's](https://www.google.co.uk/search?q=How+to+measure+execution+time+for+a+Java+method%3F&btnK=Google+Search&source=hp&ei=nnp5YfOlMZuUxc8PorG74Aw&iflsig=ALs-wAMAAAAAYXmIrte6aGiwFrxiymtMNO76xABcGnhS&gs_ssp=eJzj4tLP1TcwMkszLypTYDRgdGDw4ihOLkotT8usAABZOAdM&oq=screwfix&gs_lcp=Cgdnd3Mtd2l6EAEYATILCAAQgAQQsQMQgwEyDgguEIAEELEDEMcBEKMCMg4ILhCABBCxAxDHARDRAzIOCC4QgAQQsQMQxwEQowIyDgguEIAEELEDEMcBEKMCMggILhCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgUILhCABDIFCAAQgAQ6DggAEOoCEI8BEIwDEOUCOg4ILhDqAhCPARCMAxDlAlD2NFj2NGCsR2gBcAB4AIABLogBLpIBATGYAQCgAQGwAQo&sclient=gws-wiz) a good place to start your search.

### Part 1 - Initialise array function
Given a number, ***N***,  make a function that will generate an array of numbers 1 to ***N***.

#### Function signature
```int[] initialiseArray(int N) {}```

#### Example
```System.out.println(GenerateArray(3))```
prints: ```[1, 2, 3]``` or ```[0, 1, 2]```

What matters here is that an ascending array of specified length is generated.

---
### Part 2 
Each function below should print execution time with the complexity from below you think best describes it:
- Exponential O(N^2)
- Constant O(1) 
- Linear O(N)
---
#### Part 2a.
Given the initialised array ***N***, create an unused variable that's the result of *subtracting 2* from the array's *7th index*

#### What the solution should look like:
And make sure you time its execution!
```
long function_a(int[] arr) {
	unused_var = arr[7] - 2;
}
```
 
 #### Example
```System.out.println(function_a(10))```
prints: ```Linear time algorithm: ~3 Milliseconds``` 

---
#### Part 2b.
Given the initialised array ***N***, create an unused variable that's the result of pairing every element in the array.

e.g. ```function([1, 2, 3]) --> [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]```

#### Function signature:
And make sure you time its execution!
```
long function_b(int[] arr) {
	<Insert logic here>
}
```
 
 #### Example
```System.out.println(function_b(10))```
prints: ```<insert complexity> time algorithm: ~3 Milliseconds``` 

---
#### Part 2c.
Given the initialised array ***N***, create an unused variable that's the result of summing every element in the array.

e.g. ```function([1, 2, 3]) --> 6```

#### Function signature:
And make sure you time its execution!
```
long function_c(int[] arr) {
	<Insert logic here>
}
```
 
 #### Example
```System.out.println(function_c(10))```
prints: ```<insert complexity> time algorithm: ~3 Milliseconds``` 

---
#### Thought Experiment
Given the initialised array ***N***, create function that calls all of the above functions.

e.g. ```function() --> prints all functions complexities and execution times```

**STOP!** Before you run it, think... how long will it take to run and what complexity will it have?

#### Function signature:
And make sure you time its execution!
```
long experimental_function(int[] arr) {
	<Insert logic here>
}
```
 
 #### Example
```System.out.println(function_c(10))```
prints: ```<insert complexity of 2a> time algorithm: ~3 Milliseconds``` 
prints: ```<insert complexity of 2b> time algorithm: ~3 Milliseconds``` 
prints: ```<insert complexity of 2c> time algorithm: ~3 Milliseconds``` 

---
#### Thought incubation period
1. Check the complexities you gave to each algorithm amongst yourselves.
2. Take some time to go through the flow of each function and write down clearly why you gave each algorithm the complexity it has, I'll be picking on a handful to give their reasonings.
3. First, by yourself play with the size of the array ***arr*** and make a note of the execution times. Why do you think we don't measure algorithm performance in concrete time?
4. Again try and write down your reasoning as clearly as possible and I'll be picking on a few random people to give their explanation.
