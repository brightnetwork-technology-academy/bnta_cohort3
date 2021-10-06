# Arrays and Objects

Often we will want to store more than one piece of information in a variable. Imagine writing a shopping list that looked like this:

```js
item1 = "milk";
item2 = "eggs";
item3 = "bread";
// ...
item94 = "apples";
```

Having that many separate variables to keep track of would be a nightmare. Instead of tracking each one individually, though, we can make use of some different datastructures which will enable us to keep track of all the values using one variable.

## Arrays

One of the data structures we have access to in JavaScript is the **array**. Arrays represent an ordered list of values which can be of any type. Unlike some other languages we can mix the types of data stored in an array, although this is generally considered bad practice. We denote an array using square brackets (`[]`) with each item in the array separated by a comma.

```js
emptyArray = [];
numbers = [1, 2, 3, 4, 5];
letters = ["a", "b", "c", "d", "e"];
badIdea = [0, "a", true, numbers, Math.PI];
```

Let's return to our shopping list example above. Instead of all those separate variables we can use an array to keep them all in one place.

```js
shoppingList = ["milk", "eggs", "bread"];
```

Arrays are **mutable**, meaning we can alter their contents by calling [one of the methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) specified in the documentation. One of the simplest ways to modify an array's contents is to add a new item to the end of it using the `push()` method.

```js
shoppingList.push("apples");
// 4

// shoppingList is now ["milk", "eggs", "bread", "apples"]
```

Ther returned value is the new **length** of the array, ie. how many items are in it. We can check this at any time using `.length`.

```js
shoppingList.length;
// 4
```

Note that we don't need the brackets on this occasion. That's because `length` is a property of the array, whereas `push` is a function which needs to be called in order for it to happen. 

We can take the value back out again by using `pop()`. We don't need anything in the brackets because we just want to remove the last item we added, whereas when we `push` we need to say exactly what it is we are pushing.

```js
shoppingList.pop();
// "apples"

// shoppingList is now ["milk", "eggs", "bread"]
```

This time the returned value is the last thing added to the array. The `unshift` and `shift` methods do the same job at the start of the array.

```js
shoppingList.unshift("coffee");
// 4

// shoppingList is now ["coffee", "milk", "eggs", "bread"]

shoppingList.shift();
// "coffee"

// shoppingList is now ["milk", "eggs", "bread"]
```

A data structure for storing multiple values wouldn't be very useful if we could only ever access those at the beginning or end, and even then only by removing them. We can see which item is at a given position in the array by searching by **index**. We place square brackets after the variable name then inside write the index number we want to search for. Note that we start counting the indices from 0 as it [greatly simplifies how the data is stored in memory](https://www.howtogeek.com/149225/why-do-computers-count-from-zero/).

```js
// accessing the first element
shoppingList[0];
// "milk"

// accessing the third element
shoppingList[2];
// "bread"
```

## Objects

Arrays are useful in a situation where the ordering of the information matters and all the data has the same type, but that will often not be the scenario we are working in. Often the ordering of the information is less important than knowing more about what it represents. Imagaine we want to store some personal details about people such as their name, age and favourite colour. We could use arrays to keep all the information together:

```js
aliceArray = ["Alice", 25, "blue"];
bobArray = [28, "Bob", "yellow"];
```

Each of these arrays stores the relevant information for a person but there are some problems with this representation. For a start we need to know which index each piece of information is kept at, for example if we want to know Alice's age we need to know that it is at index 1. There is also the problem of inconsistency in our data, as index 1 in `bobArray` has his name, not his age. If we want to query our data structures in this way, arrays aren't going to do the job.

```js
aliceArray[1]
// 25

bobArray[1]
// "Bob"
```

Instead we will use an **object**. Instead of using numbered indices to access the information they contain objects use **key-value** pairs, where data added to the object is associated with a key which can be used to access it later. Objects are constructed using braces instead of square brackets and we must specify a key for each new element.

```js
alice = {
	name: "Alice",
	age: 25,
	favouriteColour: "blue"
}

bob = {
	age: 28,
	name: "Bob",
	favouriteColour: "yellow"
}
```

The keys can be whatever we want them to be, but we must follow some rules:

- They can't begin with a number
- They have to be unique within that object
- They should give the user an idea of what the associated value is - no `x`, `key1`, etc.

Now if we need to find a specific piece of information we can search for it using the key. We can access these keys in a similar way to looking up an index in an array by putting the name of the key in square brackets after the variable name, however with objects we also have the option of using **dot notation**, eg:

```js
alice["favouriteColour"];
// "blue"

alice.favouriteColour;
// "blue"
``` 

Dot notation is more commonly used, however does have some restrictions. If a key includes a special character, such as `-` or `!`, it will be interpreted as an operator in dot notation and we will end up with an error. We also can't use it to dynamically access a value. In both these scenarios we need to use the bracket notation.

Adding new values is simpler than with an array. Since ordering doesn't matter in an object we don't need to worry about adding to the start or the end of the object, we simply declare a new key and assign the value.

```js
alice.occupation = "student";
```

If we need to change a value we can re-assign the key to a new value.

```js
alice.occupation = "developer"
```

Just like with arrays, there are [many methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which we can call on objects to manipulate them in other ways.