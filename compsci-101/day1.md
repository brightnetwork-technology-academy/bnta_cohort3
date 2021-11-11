# Implementing Linear Search

## Introduction
So we're going to implement a few search algorithms over the period of this course. 

I'm going to help you out by leaving you with a **function signature** you can follow (Function signature meaning function name, arguments and return definition).

### Part 1
Given a number, ***N***,  make a function that will generate an array of numbers 1 to ***N***.

#### Function signature
```int[] GenerateArray(int N) {}```

#### Example
```System.out.println(GenerateArray(3))```
prints: ```[1, 2, 3]```

---
### Part 2
Given the same range of numbers, 1 to ***N***, write a function to generate a key which will be the number in our generated array that our search algorithm should find.

#### Function signature
```int[] GenerateArray(int N) {}```

#### Example
```System.out.println(GenerateKey(3))```
prints: ```number between1 and 3``` (inclusive)

---
### Part 3
Given an ***array*** and ***key***, implement the linear search algorithm to search through the array until it finds the key.

When it does this, return the number of steps taken to find the key.

#### Function signature
```int  LinearSearch(int[] arr, int  key) {}```

#### Example
```System.out.println(LinearSearch([1, 2, 3], 2))```
prints: ```2``` 

---
### Part 4
Pick one of the lines from this [link](https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Ftowardsdatascience.com%2Fthe-big-o-notation-d35d52f38134&psig=AOvVaw1reLTYyg3NLpKngihNLKTg&ust=1636184697871000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiCxJDdgPQCFQAAAAAdAAAAABAD) that you feel best explains how how the number of steps you algorithm takes scales with your input.

##### Part 4 stretch
Research and implement a new search algorithm for the defined problem that you feel is more efficient. 

Extra points if you if you once again choose which line from the link above best represents the performance of your algorithm.
