# Constructors & Prototypes

We've learned about the basic JavaScript language features, now it's time to start putting them all together and considering how we might use them to structure an application.

Classes are the building blocks that we use to construct applications in object-oriented programming, so learning how to create them in JavaScript is the next logical step. JavaScript isn't strictly object-oriented but it still follows many of the same conventions meaning we can follow many of the OO principles.

## "Classes" in JavaScript

Strictly speaking there is no class construct in JavaScript, although we can achieve something very similar using the constructor function pattern.

Constructor functions might look and behave slightly differently to a traditional class, but they allow us to achieve the same goal: creating objects.

## Constructor Function Notation

Let's imagine that we want to create a `Student` object. We can use a constructor function to achieve this in the same way that we might use a class in another language:

```sh
touch student.js
```

```js
// student.js

const Student = function () {

}

const alice = Student();
console.log('alice:', alice);
// -> alice: undefined
```

A constructor function is just like any other function. Seeing as we are not returning anything from our function, the return value of the `Student` function will be `undefined`. As a result the value of `alice` is `undefined`.

## The `new` Operator

If we add a `new` operator before our function call, its behaviour changes. Instead of returning `undefined`, it will return an empty `Student` object.

```js
const Student = function () {

}

const alice = new Student(); 
console.log('alice:', alice);
// -> alice: Student {}
```

`alice` knows that it was created using the `Student` constructor.

If we were to manually return an object from the function, then we would get back a plain object instead. It wouldn't know that it was created using the `Student` constructor.

```js
const Student = function () {
  return { name: 'Alice' }; 
}

const alice = new Student();
console.log('alice:', alice);
// -> alice: { name: 'Alice' }
```

The `new` operator is now ignored and the value of `alice` is the plain object that we returned. It doesn't even know that it was created via the `Student` constructor function, which isn't what we want.

The key thing to remember is that we never explicitly return anything from a constructor function because it prevents the `new` operator from working properly.

## Adding Properties to Objects

We can give objects properties (also known as attributes) to store information about them (their state). Let's give our person a name property with a `String` value.

To do this we will need to access and modify the `Student` object as it's being constructed. How can we do that?

In JavaScript there is a special keyword that we can use to refer to the object that we're currently creating from inside our constructor function: `this`.

```js
const Student = function () {
  console.log('this:', this); 
  // -> this: Student {}
}

const alice = new Student();
console.log('alice:', alice);
// -> alice: Student {}
```

They're the same object! `this` refers to whichever `Student` we're creating at the time.

The constructor can have parameters in the same way as any other function which we can use to set the **properties** of our `Student` object. By using `this` we can set the value for a specific object.

```js
const Student = function (name) {
  this.name = name; 
}

const alice = new Student('Alice');
console.log('name:', alice.name); 
// -> name: Alice
```
  
Notice that we're able to access `alice`'s name property directly. There are no access modifiers in JavaScript. There are ways to encapsulate data, effectively mimicking the `private` access modifier that you may have encountered when working with other languages, but this is a fairly advanced topic in JavaScript.

## Adding Methods To Objects

Due to the fact that functions are objects that can be stored in variables in JavaScript, we can attach methods to our objects in exactly the same way that we attach properties.

To do this we can use the `this` keyword, give our method a name and then assign an anonymous function as it's value. We can then access the method using the dot (`.`) notation, just like we would if we were accessing a property, and invoke the method by adding brackets (`()`) for our argument list.

```js
const Student = function (name) {
  this.name = name;
	
  this.greet = function () { 
    console.log(`Hi! My name is ${ this.name }`);
  }
}

const alice = new Student('Alice');
alice.greet(); 
// -> Hi! My name is Alice
```

> We can use the `this` keyword to refer to the object that is calling our method too; in this case `alice`. This is called the context.

Now our object has some behaviour!

If we create another object using the `Student` constructor, it will also have an identical `greet` function attached to it.

```js
const bob = new Student('Bob');
bob.greet();
// -> Hi! My name is Bob
```

We can also access the method on this new object, which is awesome, but there's a better way to do this. We are essentially creating multiple identical copies of the `greet` method and attaching one to every instance.

```js
console.log('alice:', alice);
console.log('bob:', bob);

// -> alice: { name: 'Alice', greet: [Function] } 
// -> bob: { name: 'Bob', greet: [Function] } 
```
There is a disadvantage to storing the same method on multiple objects, namely memory usage. Every object has teh methods created for it, leading to a lot of duplication if we have a lot of objects.


## Prototypes

Instead of adding methods in our constructor function, we can add our methods to the constructor's prototype object.

### What is a Prototype Object?

Before we learn about prototype objects in JavaScript, let's think about what the word prototype means in English.

The Oxford English Dictionary defines a prototype as:

*"A first or preliminary version of a device or vehicle from which other forms are developed."*

In JavaScript a prototype object acts as a central store of information which all objects created via a particular constructor function can access.

### How do we do this?

When we create objects using a constructor function with the `new` operator, the constructor's prototype object is assigned to it. Prototype objects are just objects with key-value pairs, like any other in JavaScript.

Let's access the `Student` object `prototype` and add a greet method to it.

```js
const Student = function (name) {
  this.name = name;
}

Student.prototype.greet = function () { 
  console.log(`Hi! My name is ${ this.name }`);
}
```

We created a new key, `greet`, within the `Student` constructors prototype object and assigned a function as its value.

This method will now be stored only on the shared prototype object, instead of each `Student` instance.

```js
const alice = new Student('Alice');
alice.greet();
// -> Hi! My Name is Alice

const bob = new Student('Bob');
bob.greet();
// -> Hi! My Name is Bob

console.log('alice:', alice);
console.log('bob:', bob);
// -> alice: { name: 'Alice' }
// -> bob: { name: 'Bob' }
```

Notice that the `greet` function is no longer attached to each object, but they still have access to the method.

We can see these object's prototypes using `Object.getPrototypeOf`.

```js
console.log("alice's prototype:", Object.getPrototypeOf(alice));
console.log("bob's prototype:", Object.getPrototypeOf(bob));
```

### Why do we do this?

Storing methods on a prototype, instead of the objects themselves, is more memory efficient. When we do this only one copy of each method exists in memory. If we were to store a copy of every method on every object that we created, then we would be using additional memory to store multiple copies of the exact same function.

### Task: 

1. Create a new file - `laptop.js`
2. Create a Laptop constructor
3. Assign values to the following properties in your Laptop constructor via parameters:
	- manufacturer
	- model
	- operatingSystem
4. Add an `install` method to your `Laptop`'s prototype. This method should accept a `program` parameter and output a string containing the `model` property and the `program` that was installed. For example: `'MacBook Pro installed Discord'`.

<details>
<summary>Example solution</summary>

```sh
touch laptop.js
```

```js
// laptop.js

const Laptop = function (manufacturer, model, operatingSystem) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.operatingSystem = operatingSystem
}

Laptop.prototype.install = function (program) {
  console.log(`${ this.model } installed ${ program }`);
}

const macbook = new Laptop('Apple', 'MacBook Pro', 'Big Sur');
macbook.install('Discord');
```

</details>

## Multiple Classes

Our classes don't exist in isolation, they will usually interact with each other. Let's say we want our `Student`s to have `Laptop`s. First up we need to give the `Student` a property to represent their laptop.

```js
// student.js

const Student = function (name) {
	this.name = name;
	this.laptop = null;
}
```

Instead of passing a `laptop` argument to our constructor we initialise the property to be `null`. This is usually done when we want every instance of a class to start with the same value for some property - in this case we want all our students to start without a laptop.

We can modify this property by writing a method which adds a `Laptop` to our `Student`.

```js
// student.js

// ...

Student.prototype.buyLaptop = function(newLaptop){
	this.laptop = newLatop;
}

```

Why do we do it this way instead of simply setting the property when we want to update it? Why got to the bother of adding a method? In most programming languages we try to avoid this, as it is considered bad practice to allow users to modify properties whenever they want to. In other languages such as Java we use an *access modifier* to prevent this, meaning we *have* to write a method if we want to update anything. This can be done in JavaScript but is a fairly advanced topic.

Now that our `Student`s have `Laptop`s they can use the properties and behaviours of those `Laptop` objects in their own methods. 

### Task:

- Add an `updateLaptop` method to `Student` which:
	- Accepts a `program` parameter
	- Outputs a string containing the student's name, laptop's name and the program. For example: `'Alice updated MacBook Pro with Discord'`
	- Invokes the laptop's `install` method and passes the `program` to it

<details>
<summary>Example solution</summary>

```js
// student.js

const Student = function (name) {
  this.name = name;
  this.laptop = null; 
}

Student.prototype.greet = function () {
  console.log(`Hi! My name is ${ this.name }`);
}

Student.prototype.updateLaptop = function (program) { 
  const message = `${ this.name } updated ${ this.laptop.model } with ${ program }`;
  console.log(message);
  this.laptop.install(program);
}
```

</details>