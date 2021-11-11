# Day 2, Second task
## Don't forget about RAM! - 30 mins!
We've had a little deep dive into the memory view in C++ to see what the basic fundamental operations are (INSERT, COMPARE, INITIALISE, STORE).

You might be beginning to form an intuitive understanding about how to CPU writes to RAM, executing your algorithms and manipulating data to spit out the solution to the problem.

O(1) just means a constant number one or more fundamental operations.

O(N) A linearly growing number of constant time fundamental operations

O(N^2) An exponentially growing number of constant fundamental operations.

### Work out the complexities for the Array methods below in Java
```[]int array = {1, 2, 3, 4, 5}``` or ArrayList

One person from each group gives their explanation and we can discuss it together.

#### 1. Getting the value at the index of array (We did this one already)
```>>> System.out.println(array[0]);```

O(1) - Explanation: 
We know that the next int is a set number of bytes away, so we just have to do simple maths to work out which memory block is the index that holds the value we want to manipulate.

---
#### 2. Update value at a given index
```>>> array[0] = 6;```

O(?) - Explanation: 
[ Insert your explanation ]

---
#### 3. Insert value at beginning of array
```>>> array.add(0, yourInteger);```

O(?) - Explanation: 
[ Insert your explanation ]

---
#### 4. Insert value in middle of array
```>>> arrayList.add(middleOfArray, yourInteger);```

O(?) - Explanation: 
[ Insert your explanation ]

---
#### 5. Insert value at end of array
```Watch out: ArrayList and Array have different complexities```

O(?) - Explanation: 
- Why  might array and arrayList have different complexities?

[ Insert your explanation ]

---
#### 6. Remove value from the beginning of the array
```>>> arrayList.remove(beginningOfArray, yourInteger);```

O(?) - Explanation: 
[ Insert your explanation ]

---
#### 7. Remove value from the middle of the array
```>>> arrayList.add(middleOfArray, yourInteger);```

O(?) - Explanation: 
[ Insert your explanation ]

---
#### 8. Remove value from the end of the array
```>>> arrayList.add(endOfArray, yourInteger);```

O(?) - Explanation: 
[ Insert your explanation ]

#### 10. Copy an array
There are many methods that secretly do this:
``````java
e.g. Arrays.asList(array).subList(index, array.length);
``````

O(?) - Explanation: 
[ Insert your explanation ]
