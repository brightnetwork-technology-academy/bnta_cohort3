# Day 2, Third task

## Complexity normalization - 20 mins!

Let's analyse and discuss the complexities of the code blocks below:

### 1. 
``` java
int n = 100;
int[] initialiseArray(int size = n);
```
Space complexity = ?

Time complexity = ?

---

### 2. 
``` java
for (int i=0; i < 9; i++) {
	System.out.println(i);
}
```
Space complexity = ?

Time complexity = ?

---
### 3. 
``` java
int[array] = {1, 2, 3};
for (int number : array) {
	System.out.println(number)
}
```
Space complexity = ?

Time complexity = ?

---
### 4. 
``` java
int[array] = {1, 2, 3};
for (int i=0; i < 100; i++) {
	for (int number : array) {
		System.out.println(number)
	}
}
```
Space complexity = ?

Time complexity = ?

---

### 5. 
``` java
for (int i=0; i < 100; i++) {
	int a = 1;
	int b = 3;
	int c = 44;
	System.out.println(a + b);
	System.out.println(c + a);
	System.out.println(a + c);
	System.out.println(r + b);
}
```
Space complexity = ?

Time complexity = ?

---

### 5. 
``` java
String greeting = "Hello world!";
String upperString = "";

for (char character : greeting) {
    upperstring += character.toUpper();
}
```
Space complexity = ?

Time complexity = ?

## Homework
Research and implement the bubble sort algorithm with the optimal space-time complexity in Java for tomorrows lesson.

This time try completing the engineering your solution without class outlines or function signatures from me. 

It's time to practice architecting what your code will look like by yourself with flow charts, pseudo-code or whatever works for you. I'll leave you with this starting point:
[Bubble sort in 2 minutes - YouTube](https://www.youtube.com/watch?v=xli_FI7CuzA)

Feel free to work in groups.

