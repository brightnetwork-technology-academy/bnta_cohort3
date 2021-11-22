# Hooks

React-s un-opinionated nature is great for developers when it comes to desinging an app. As we've seen already we can mix and match the different styles of writing components but with the tools at our disposal currently we have some limitations. If a component is purely presentational we can use either a functional or class-based component as both can receive props and render JSX, but as soon as we need to use any state we are limited to class components. That's because we need a constructor function in which to initialise the state object, which we don't have with a functional component.

Recent versions of React have begun to implement features which make it possible though. **Hooks** are functions which form a core part of the React library and enable us to handle state, lifecycle and other features outside of the structure of a class. By using hooks in our applications we can build them entirely with functional components, leading to more streamlined and consistent code.

## Containers & Components

We're going to build an application which will make use of hooks to manage our state, but also to handle data loading. We'll start by creating our app with `create-react-app` and replacing the boilerplate code in `App.js`.

```sh
npx create-react-app dog_photos
```

```jsx
// App.js

const App = () => {
  return (
    <h1>Dog Photo Viewer</h1>
  );
}

export default App;
```

Before we go any further we need to think about how our app will be structured and where the data needs to be stored. We're going to have two components: one for displaying an image, one holding a button which will get a new image when clicked. Those components will be on separate branches of the DOM tree and so can't directly communicate, meaning there must be a common parent element somewhere above them to facilitate the transfer of data. 

This component will hold some state but won't use it directly. We refer to this as **application state** since it affects (or can be affected by) multiple parts of the app. To help us keep track of which components need to hold state and which should simply render content we can make a distinction between the two:

- **Containers** are components which hold application state and define the functions used to update it. Any complex logic should be handled by a container.
- **Components** are purely presentational. They accept props and define the HTML to render it. Any logic in a component should be limited to what is necessary for rendering, eg. mapping an array to further components.

We'll make a directory for each then create our first container.

```sh
# terminal

mkdir src/containers
mkdir src/components

touch src/containers/DogContainer.js
```

Since it is un-opinionated React doesn't care about the file structure so long as everything is in the `src` folder. That said, it can be helpful to ensure there are sub-directories to categorise components with if your file structure starts getting too large to navigate easily.

For now we can have `DogContainer` display some HTML and we'll render it in `App.js`

```jsx
// DogContainer.js

const DogContainer = () => {

	return (
   		<p>I'm in the DogContainer!</p>
    )

}

export default DogContainer;
```

```jsx
// App.js

import DogContainer from "./containers/DogContainer";

const App = () => {
  return (
    <>
      <h1>Dog Photo Viewer</h1>
      <DogContainer />
    </>
  );
}
```

## useState

Our container needs to hold our application state but doesn't have a constructor to initialise it in, which means we're going to need to introduce a **hook**. The **useState** hook will provide two things for us: a variable in which to store a piece of state and a function which we can use to update it. This function will trigger a re-render in the same way as the `setState()` function we have seen previously. Unlike with the older style, each piece of state in a functional component is held in its own variable and has to be updated individually. This sounds like a more expensive operation, but thanks to the virtual DOM the impact is minimised.

`useState` takes an argument to denote the initial value for the state and returns an array with the variable as its first value and the function as its second, which we can destructure into separate variables for easier use.

```jsx
// DogContainer.js

import { useState } from "react";

const DogContainer = () => {

    const [dog, setDog] = useState(null);

    return (
   		<p>I'm in the DogContainer!</p>
    )

}

```

We now have a variable `dog` to store the state and a function `setDog` with which to update it. If we check the components tab in the dev tools we can see that `DogContainer` has a state attribute, just like it would if it had been a class. `dog` will be passed down to another component soon but it's currently `null`, so how do we get some data into it?

## useEffect

As with any JavaScript application, loading data into a React app isn't quite as straight-forward as it sounds. Regardless of where we're loading the data from it will take time which means we can't use it straight away. We also need to make sure that our app is ready to receive the data. The **useEffect** hook will help us manage both of these problems by letting us decide exactly when to load the data.

It's not just loading data it can help us with though, `useEffect` is structured in such a way that it can call any function whenever a specific value in state changes. It is used to recreate much of the functionality which was built in to the `Component` class. It takes two arguments: a callback and an array of variables to monitor for changes. When any of the variables in the array are updated, the callback is called.

A very common use of this is making an API call after a component has loaded. If we were to do this to load a dog photo we would update `DogContainer` as shown below:

```jsx
// DogContainer.js

import { useState, useEffect } from "react";

const DogContainer = () => {

    const [dog, setDog] = useState(null);
    
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => setDog(response.data))
    }, []);

    return (
   		<p>I'm in the DogContainer!</p>
    )

}

```

The callback can be defined as an anonymous function as we have done here or it can be defined elsewhere and passed in. The callback will always be called at least once after the component loads, even if we don't specify any variables to track. If we don't provide a second argument to `useEffect` the callback will fire after *every* state change, leading to potential infinite loops if the function is updating state. If we provide an empty array, though, the callback fires after the initial render but then never again. By configuring `useEffect` in this way we replicate the `componentDidMount()` method from class-based components.

If we check the dev tools again we see two things have changed. First we now have an "effect" hook listed with a function shown as its value. We also have a value for our `dog` state variable which can be sent off to other parts of our app.

## Lifecycle & Conditional Rendering

The `dog` value will be passed down as a prop, but first we need to create a component to display it. It doesn't need to hold any state so will go in the `components` folder. 

```sh
# terminal

touch src/components/DogViewer.js
```

```jsx
// DogViewer.js

const DogViewer = ({dog}) => {

    return (
        <img src={dog.message} alt="dog" />
    )

}

export default DogViewer;
```

```jsx
// DogContainer.js

import { useState, useEffect } from "react";
import DogViewer from "../components/DogViewer";

const DogContainer = () => {

    // ...

    return (
   		<DogViewer dog={dog} />
    )

}
```

Refereshing our page should let us see some dog pictures... but it doesn't. Instead we get an error message saying we "cannot read properties of null". We've set up the `useEffect` call to get the image url from the API so why is our component throwing an error?

The answer lies in `DogContainer`'s **lifecycle**. Although React is pretty un-opinionated in general, in some areas there are processes which *must* be followed and the steps required to create a component are one of them. When the function to create `DogContainer` is called the state is initialised and the HTML returned by the function is rendered. At this point the component has **mounted** and the callback we have passed to `useEffect` will be called (or `componentDidMount` in the old style). That means that for the first render we are passing the initial value of `dog` to `DogViewer`, which is `null`. When the state is updated by `useEffect` and a re-render is triggered the component can access the `message` property, but not before the error has been thrown.

To avoid this we can use a process known as **conditional rendering**. Instead of simply asking React to render the component we will add some sort of condition to our code which must be satisfied first. This could be in the form of an if-statement or a ternary as we do here:

```jsx
// DogContainer.js

const DogContainer = () => {

    // ...

    return (
    	dog ?
   		<DogViewer dog={dog} />
   		:
   		<p>Loading dog picture...</p>
    )

}
```

Now if we refresh the page we briefly see the loading text displayed before the state is updated and the dog image is displayed.

## Passing Functions

We're going to add another component which will be responsible for getting another image from the API. We could add the functionality to an existing component, but that would mean *every* instance of that component would have the functionality associated with it. Instead we'll add a `NewDogButton` component to handle this, but that means the button will be in a different component from the state which it needs to update.

```sh
touch src/components/NewDogButton.js
```

```jsx
// NewDogButton.js

const NewDogButton = () => {

    return (
        <button>Fetch!</button>
    )

}

export default NewDogButton;
```

```jsx
// DogContainer.js

import NewDogButton from "../components/NewDogButton";

const DogContainer = () => {

    // ...

    return (
    	dog ?
    	<>
   			<DogViewer dog={dog} />
   			<NewDogButton />
   		</>
   		:
   		<p>Loading dog picture...</p>
    )

}
```

Inside `NewDogButton` we need to define the behaviour we want when the button is clicked. For now we'll simply log something to the console to confirm that the event is being picked up correctly.

```jsx
// NewDogButton.js

const NewDogButton = () => {

    const handleClick = () => {
        console.log("button clicked");
    }

    return (
        <button onClick={handleClick}>Fetch!</button>
    )

}

export default NewDogButton;
```

Note that we only pass the name of the function to the button element and don't call it. When we define event listeners like this we are passing the function to be claaed when the event fires; if we add brackets after the name we would be passing the return value of the function, `undefined` in this case.

Clicking the button logs to the console, so our event handler is set up correctly. Now we need to modify it so that we get a new dog photo. We already have the functionality to update the `dog` value in state, so how do we get it down to `NewDogButton`?

Recall that functions in JavaScript are first-class objects. That means that we can a variable storing a function just like one storing any other value, including passing it as props in React. To test this we'll add a function to `DogContainer` and have it log to the console. We'll pass it to `NewDogButton` as a prop.

```jsx
// DogContainer.js

const DogContainer = () => {

    // ...
    
    const updateDogData = () => {
        console.log("updating dog data from DogContainer");
    }

    return (
    	dog ?
    	<>
   			<DogViewer dog={dog} />
   			<NewDogButton onClick={updateDogData}/>
   		</>
   		:
   		<p>Loading dog picture...</p>
    )

}

```

In `NewDogButton` we can now access that prop and call the function within our existing event handler.

```jsx
// NewDogButton.js

const NewDogButton = ({onClick}) => {

    const handleClick = () => {
        console.log("button clicked");
        onClick();
    }

    // ...

}
```

Now when we click the button we see both `console.log` messages being printed. All that remains is to modify the function in `DogContainer` so that it updates the state:

```jsx
// DogContainer.js

const DogContainer = () => {

    // ...
    
    const updateDogData = () => {
        console.log("updating dog data from DogContainer");
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => setDog(response.data))
    }

    // ...

}

```

Now we have a finished app (apart from any styling) with components which could easily be reused if we wanted to extend its functionality.