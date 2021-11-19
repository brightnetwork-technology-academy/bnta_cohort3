<img src="images/BNTA_simple.png" alt="BNTA logo" height=50px/>

# BNTA Course Notes

## JavaScript Events Notes

### Introduction

JavaScript, even with all of its quirks, sits in an interesting place within web development. The silos of "Front-End" and "Back-End" are prevalent across the field, often dictating both *how* you will work and *what* you will work with. For instance, a Front-End Developer may spend most of their time creating user interfaces of an app or the front face for a website, making use of technologies such as React or PHP. HTML and CSS are their remit, barely ever touching the likes of Java; conversely, a Back-End Developer focuses entirely on functionality, barely considering the visual design of their application past what is expected regarding end-points.

How this relates back to JavaScript is how it bridges the gap between these seemingly distinct regions. Web development isn't as truly categorised as the job market would suggest, with a Software Engineers' toolkit finding its use across a myriad of different roles and sectors. Between interfacing with structural front-end languages, creating interactive elements on your site, and presenting a backend API using Express.js, JavaScript is multifaceted and prevalent. JavaScript is the only programming language which runs natively on browsers and recognising what is provided *"out of the box"* will only bolster your ability as a Software Engineer.

### A Note on Vanilla JavaScript *vs.* React

React is a JavaScript **library** which sits above the systems provided by the native browser languages of HTML, CSS and JS. It does not *extend* what is already present, but rather provides a **new means to play with the same tools**. With this, it often affords a preferable, more streamlined experience developing which in turn allows you to create more within a set length of time; React's *abstraction* of native browser functionality provides you with convenient tools and shortcuts that allow you to create more complicated, dynamic, sites with greater ease, but it is worth noting that the same functionality is achievable using vanilla JavaScript, often without much more work. React's observable boost to production also comes at the cost of performance and increased complexity.

We urge you to spend a bit of time with the native languages as ultimately, this experience is more transferable to other projects with varied language use. Creating small applications or code snippets which you can host on a code-sharing platform, while using default technologies, will greater exemplify your strengths as a web developer.

### Codepen.io

[https://codepen.io]()

For this following topic, we're going to use Codepen.io for a couple different reasons:

- We want to introduce you to the platform so that you may feel more comfortable using it in the future. If ever you have a bright idea for a small web feature, or if you simply feel like messing about with some code without going through the steps of setting up a project on your system, then Codepen (or it's equivalent) is great.

- It does not have any auto-complete features. This may sound counter-intuitive but your understanding of the code that you are writing will be improved by truly bringing its name out from memory, or from a light google for the documentation. Whenever something you are doing feels magical, spend a bit of time with the documentation so that you can begin understanding what is happening. Just chuck *"mdn"* at the beginning of your search and more often than not, you'll find what you're looking for.

#### Using Local Files

One thing to note here, is that your JavaScript file will already have been connected to your HTML file as Codepen handles all the set-up for your page itself. If you would prefer to use local files then remember to refer to your JavaScript file within your base HTML `<head>` element:

`<script defer src="main.js"></script>`

The `defer` keyword here ensures that the elements of our HTML are rendered before the JS file is run. We could alternatively situate the `<script>` tag at the bottom of the `<body>` element to ensure the same process.



## JavaScript

### Selecting an Element - `Element.getElementById()`

[https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById]()

Before we start looking at Event Listeners themselves, we're going to need to cover the basics of how you can connect your JavaScript code to your HTML document. First, let's look at how we can refer to an item within our HTML document with `getElementById()`. Assume that the code-block below is situated in the `<body>` of a document:

```html
<button id="btn">Click Me!</button>
```

It's nothing too exciting: all we have is a simple button which wants to be clicked with the assigned ID of *"btn"*. Let's make our JS file target this element.

```js
const btn = document.getElementById("btn")
```

*The quotation marks passed at the argument can be single quotes `'` or double quotes `"`*

Note here that the initial part of the function, `document`, refers to the HTML document. We are taking the entire *document* and then finding the *element with the specified ID* within in. If we now simply `console.log()` this constant we receive:

<img src="images/btn_in_console.png" width=400px/>

Which is simply our HTML element, neat! This is the first step towards creating an Event Listener using vanilla JavaScript. Easy, huh?

### Selecting an Element - `Element.getElementsByClassName()`

[https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName]()

Before we look at assigning a simple on-click event to our button, let's look at the counterpart function to `getElementById()` which is `getElementsByClassName()`. It is as you would expect, it grabs all HTML elements with the class specified. The important point here, is that it is **all** elements with the specified class name and hence you are returned an array of multiple objects when using this function. This is true, even if only one element exists with the assigned class. See the image below for the same exercise as above, but with use of `getElementsByClassName()`:

<img src="images/getElements.png" width=400px/>

The presentation of the information is significantly different from what we saw within the previous section, but if we simply iterate through this constant using a `for` loop, we receive the same output as before on the console. Something which is worth pointing out here is the rogue `s` within the get-element**S**-by-class-name declaration which is easy to miss if you're used to using `getElementById()`

### Event Listeners - `Element.addEventListener()`

All event listeners take the form of:

```js
Element.addEventListener("eventType", event => {function})
```

Where the *"eventType"* can be one of many different events, such as:

- the mouse entering the bounds of the specified element
- a click 
- an animation coming to an end
- the user copying some text
- a file being dragged onto the browser window
- scrolling down the page

*etc.*

[https://developer.mozilla.org/en-US/docs/Web/Events]()

The link above has a more exhaustive list of web events which you can snoop for in your JavaScript code. As you can see, there are many, some of which are difficult to envision a use-case for. We're going to be focussing only on one event, the mouse `click` event throughout the following exercises. If you would like to have a play about with other types of event though, please do. It should simply be a matter of swapping out the first argument, `"eventType"` with the relevant event name, most of which should be easy to find in the MDN documentation.



## Event Listeners - Some Examples

[https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event]()

### Console.log()

Let's take a step back, reverting our code back to using `getElementById()`. As before, we have a simple button with the assigned ID of *"btn"*. We then have a JavaScript `const` also called *"btn"* which refers to this HTML element. Currently though, our button does nothing. You can click it to observe the default change in styling associated with that action, but no function is being run as a consequence of that. Let's start small, with a simple `console.log` function within our Event Listener:

```js
const button = document.getElementById("btn");

btn.addEventListener("click", event => {
  console.log("The button has been clicked!")
});
```
Now, when we click our button, we get the message *"The button has been clicked!"* printed in the console. Give it a go! You can access the browsers' console output on Codepen in the same way as on any page. Either open up the Developer Tools by right clicking and then selecting `inspect` or by hitting `F12`, and then select the `Console` tab.

### Changing Inline Properties - `Element.setAttribute()`

Printing to the console is all well and good, but it's not something we're going to implement on our webpage. Let's look at sprucing things up a little by affecting the `style` attribute of an element on our page. First, introduce a new element on your page with `id="box"` and then assign it some basic styling within the CSS to make a red box appear on your screen:

```html
<div id="box"></div>

<button id="btn">Click Me!</button>
```

```css
#box {
  background-color: red;
  height: 200px;
  width: 200px;
}
```
You should have a red box on your page with the button situated just below. Again, this is not anything too flashy but once you get the hang of the basics, you'll be surprised at just how much you can achieve with a little JavaScript. Once we add in a new `const` called `box` to refer to our new HTML element, we can adapt our `click` Event Listener from before to utilise another key JavaScript method: `setAttribute()`

`setAttribute()` takes two arguments. The first is the name of the elements' attribute that we wish to affect while the second is the new value which we want to assign. In the example below, we are affecting the `style` attribute of our red box, changing its background colour from red to blue.

```js
const button = document.getElementById("btn");
const box = document.getElementByI

btn.addEventListener("click", event => {
  box.setAttribute("style", "background-color: blue;")
});
```
Try clicking the button to make your box blue! If you refresh your page, you will observe that the change is not retained. This is due to the browser re-loading the page from the initially defined code which is unaffected by the `setAttribute()` method. One other thing worth noting here is that we are only affecting the associated HTML document, leaving the CSS properties intact. This means that this change in colour is actually being introduced by a *separate* piece of code, with a greater associated specificity. It is not overwriting the declaration in the CSS file. Putting this concisely, *inline* styling takes priority over that declared in an attached CSS file.

### HTML Custom Data Attributes

[https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes]()

[https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute]()

As touched on before, the `setAttribute()` function can set the value of any attribute on an HTML element. Custom data attributes are attributes which you create and assign which have no already-associated functionality or data. MDN says:

*"HTML5 is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning."*

As always, this wording is a little heavy, so let's look at a basic example. For sake of clarity, let's call our custom attribute `data-blueBackground`.
Note that it is common practice to prepend your custom attribute's name with *"data-"*. This is so that later down the line if an attribute of the same name is introduced to the web specifications, then it won't break your existing code. Change your JavaScript code to reflect the excerpt below:

```js
const button = document.getElementById("btn");
const box = document.getElementByI

btn.addEventListener("click", event => {
  box.setAttribute("data-blueBackground", "true")
});
```
<img src="images/set_data_attribute.png" width=400px />

Now, when we click our button and look in the Dev Tools *"Elements"* tab, we can see that our box has been assigned the `data-blueBackground` attribute. This doesn't cause our box to turn blue itself, however, so we also need to add a new rule to our CSS file:

```css
#box[data-blueBackground] {
  background-color: blue;
}
```
Note here that we are using an additional **CSS attribute selector** which causes this rule to take priority over our previously defined set when satisfied. The previous `#box` styling has been left in tact.

### A note on Separation of Concerns

This exercise may seem somewhat pointless—for didn't we just cause the same change on-screen with fewer lines of code in the previous example?—but you need to bear in mind that nothing in software engineering is particularly cut-and-dry. There is rarely a truly *correct* way to tackle a task; there are often just *more right* ways of doing it. 

In computer science, there is an idea called the **Separation of Concerns**. This design principle states that you should collect each distinct part of your computer program into separate sections. For the web, this means that you should separate your logic from your styling from your document structure. For a project using only vanilla web technologies, this would mean having your structuring within your HTML file, your styling within your CSS file and then your logic—such as state management—in your JavaScript file. For an application which makes use of a frontend framework or React, this distinction may be made within different file types or even within different sections within the same file. The principle still stands and it's still useful to separate the three sections were possible. What is important is that *your code makes sense* and that someone coming in from another team won't have to spend hours untangling dependancies and logic to simply change the styling on a button.

### Making a Custom Attribute Toggle - `getAttribute()`

So far, we have only created a one-time use `<button>` element which switches our box from red to blue; its lacking something a bit *more* before we can consider it a full feature. What if we look at making it so that we can switch it from red, to blue and then back to red again—removing the need to refresh the page to reset the element to its initial state? As mentioned briefly in the section above, JavaScript is often used to manage the **logic** of our web application, given that it is dynamic and can be run on-the-fly within the browser. Before we cover how to make our button toggle, however, we first need to shuffle about parts of our code.

Now that our custom data attribute is going to become an intrinsic part of our element, we should first change it so that it has a default value set:

```html
<div id="box" data-blueBackground="false" ></div>
```

Next, let's change our CSS so that the box is only blue when the `data-blueBackground` attribute is set to `"true"`:

```css
#box[data-blueBackground="true"] {
  background-color: blue;
}
```

The button should now function as it did before, as a one-time use element which turns our box from red to blue. Now, **let's make it togglable**.

For this, we're going to need to introduce one last JavaScript method: `Element.getAttribute()` which says what it does on the tin. This method allows us to grab the value of a specified attribute from an element. The logic which we are trying to implement should be easy to follow, but we're going to break down the steps into some pseudo-code for clarity and to remind you that it is often the best place to start with your own problem solving.

1. Assign JS variables which point towards our button & box elements
2. Grab the current `data-blueBackground` attribute using `getAttribute()`, again assigning this to another variable
3. Check the value of the second variable, creating a new boolean value which we can easily invert
4. Invert the boolean value
5. Assign the new value to the `data-blueBackground` attribute

Putting this all together, you should get something that looks like below:

```js
const button = document.getElementById("btn");

const box = document.getElementById("box");

btn.addEventListener("click", event => {
  const dataBlueBkg = box.getAttribute("data-blueBackground");
  const blueBkgBool = (dataBlueBkg === 'true');
  const boolInverted = !blueBkgBool;
  
  box.setAttribute("data-blueBackground", boolInverted)
});
```
Note that we have instantiated the `dataBlueBkg`, `blueBkgBool` and `boolInverted` constants *within* the on-click event listener function as we need these to be updated each time we click the button. Give your button a click! And another! Watch as it flicks from red to blue to back again. Congratulations, you've successfully implemented a simple toggle function!

### Persistent state

We've already gone over a lot today but there's one last topic that we want to touch on before we close out and that is **persistence**. You may have noticed above  that on refresh of the page that the colour still resets same as before, irrespective of the new toggle function. This is because there is still no *persistence of state* between loads of the page. **State** is the term used to describe the *configuration of our application*, which is upheld between events and interactions (such as refreshing the page or logging in & out). To introduce persistent state across your application, you need to utilise some form of information storage outwith your webpage's files. There are a couple key places where you can store state data. An in-built storage place exists within your browser in the form of `localStorage`. Here, you can store key-value pairs with no expiration date. The putting and removing of this data is all handled using JavaScript. It is common for developers to utilise `localStorage` to store information such as user preferences (whether they prefer *"Light"* or *"Dark"* Theme for instance) or for game save files. Alternatively (usually for information such as login credentials or a shopping basket) you can make use of an external database alongside your sever. This saves on passing large amounts of data within HTTP headers which can be wasteful and slow down processes on your site. A soft rule-of-thumb for knowing where to store your data is to consider where it is to be used: if the info is to be used on either *just the server* or *both the server and the client*, then you should store the information on the **server**; if the information is to be used exclusively on the *client*, then you should store it on the **client**. *State* is something that we will encouter a lot more in the following React topics, but is also something worth being aware of ahead of time so that you can start spotting how different websites utilise this feature.



## Practice

This document serves largely as a walkthrough for some of the basic functions JavaScript provides. Have an explore of what else is on offer and combine it with some of your earlier teaching. For instance, you could have a play about with CSS Grid alongside `getElementById()` to grab the element and affect the grid-template layout. You could even play about with `getElementsByClassName()` to introduce some level of randomness to your grid items within your container. Try affecting the assigned `grid-row` or `grid-column` values of one, or many, of your grid items to make some cool effects. Remember that you can use `grid-auto-flow: dense` to allow your grid to reorganise and make more efficient use of space!

You may find the `Math.random()` function handy when introducing a level of randomness. The MDN article below details how you can use this function within another, allowing you to specify the upwards bounds for your random integer.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random]()

- Play about with each of the topics covered today, focussing on understanding how each piece slots together before branching out
- Make something functional *and* creative. Take the CSS Grid example outlined above or follow your own vision!



## Further Reading

[Go Make Things - Yes, Vanilla JS Does Scale](https://gomakethings.com/yes-vanilla-js-does-scale/)

[CSS Tricks - An Introduction to ES6 JS Syntax](https://css-tricks.com/learning-gutenberg-4-modern-javascript-syntax/)

[CSS Tricks - Client-side Framework Performance](https://css-tricks.com/radeventlistener-a-tale-of-client-side-framework-performance/)


