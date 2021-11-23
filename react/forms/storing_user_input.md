# Handling User Input in React

We've previously seen how to handle a user's interaction with our apps when we are trying to filter the data displayed on screen. We've also seen how we can load data from an API and store it in our application's state. How can we combine both of these concepts to enable us to capture a user's input and add something to our state instead of filtering it?

In this lesson we're going to do just that! We'll build a to-do list which will display some tasks we need to complete but also include a form to let us add more.

## Displaying Tasks

Our application is going to be slightly more complicated than those which have come before. We'll still need a container to hold our application's state but this time we will have more than one task to render, meaning we'll be re-using a component. To help us manage this we'll add another component to handle the organisation of our task data and manage the rendering to help ensure we have a separation of concerns in our app.

> Open start point and run `npm install` to download libraries

```sh
mkdir src/containers
mkdir src/components

touch src/containers/ToDoContainer.js
touch src/components/TaskList.js
touch src/components/Task.js
```

Normally we'd start by loading some data from an API but to save time here we're going to load some data from a file instead. Once it's loaded into our application we'll be managing it in state, it just won't persist when we reload the app. We'll add a `useEffect` call to handle it as if we were dealing with an API though.

```jsx
// App.js

import ToDoContainer from './containers/ToDoContainer';

function App() {
  return (
    <>
      <h1>My ToDo List</h1>
      <ToDoContainer/>
    </>
  );
}

export default App;
```

```jsx
// ToDoContainer.js

import { useState, useEffect } from "react";
import todos from "../todos";

const ToDoContainer = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(todos);
    }, []);

    return(
        <p>Tasks will go here</p>
    )

}

export default ToDoContainer;
```

We could ask `ToDoContainer` to create a component for each of our tasks, but that would be adding a lot of extra functionality. Remember that containers are supposed to maintain state and carry out any business logic, presentational stuff is the responsibility of the components. We've got some tasks but the number will go up by the time we're done here which makes things even more complicated. Life will be much easier if we take the responsibility of displaying tasks away from our container and get a component to handle it.

We'll get `TaskList` to take care of things. It won't be directly responsible for rendering anything, but will receive the list of tasks as a prop and do whatever needs to be done for each task for as many times as is necessary. 

```jsx
// ToDoContainer.js

// ...

	return(
        <TaskList thingsToDo={tasks} /> 
    )
```

```jsx
// TaskList.js

import Task from "./Task";

const TaskList = ({thingsToDo}) => {

    const taskComponents = thingsToDo.map(task => {
        return(
            <p>There will be a p element for each task</p>
        );
    });

    return(
        <div className="task-list">
            {taskComponents}
        </div>
    )

}

export default TaskList;
```

By mapping the list of tasks we have generated an array of `p` elements, one for each entry on the list. When we include the variable the array is stored in in the return statement all of the elements it contains will be rendered. Note that we are using a `div` instead of a fragment here; we want to apply some styling to the page so can't use a fragment, since they don't show up in the DOM tree.

Instead of a `p` we want to use a component to display the details of each task. We can still map the list of tasks, but instead we'll use our `Task` component and give each one a task as a prop.

```jsx
// TaskList.js

// ...

const taskComponents = thingsToDo.map(task => {
        return(
            <Task thingToDo={task} key={task.id} />
        );
    });
    
// ...

```

```jsx
// Task.js

const Task = ({thingToDo}) => {

    return(
        <div className="task">
            <h3>Description:</h3>
            <p>{thingToDo.description}</p>
            <h4>Priority:</h4>
            <p>{thingToDo.priority}</p>
            <h4>Completed?</h4>
            <p>{thingToDo.completed ? "Yes" : "No"}</p>
        </div>
    )

}

export default Task;
```

The `key` prop we pass to each task isn't used by us at all but is important for React. One of the advantages of the virtual DOM is being able to target exactly which parts need to be updated before re-render and using keys as a unique identifier is one of the tools to help React manage this. The app will still work without the keys (and we won't notice a difference with an app of this size) but React won't be able to tell which `Task` component needs to be updated when our state changes without them.

## Submitting a New Task

Our app needs a form, which means it needs a new component to keep it in. 

```sh
touch src/components/NewTaskForm.js
```

Our form will capture all of the information a user enters about a new task, although they won't need to input all of the details (a task will always be incomplete when added, for example). 

```jsx
// NewTaskForm.js

const NewTaskForm = () => {

    return (
        <>
            <h2>Add a new task:</h2>
            <form >
                <div className="formElement">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description"/>
                </div>
                <div className="formElement">
                <label htmlFor="priority">Priority: </label>
                    <label htmlFor="priority">Priority: </label>
                    <input type="text" id="priority"/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )

}

export default NewTaskForm;
```

This gives us a form on the page but not the functionality we want. We can type in the text fields and click the button but when we do nothing the new task isn't added. Our form is actually behaving exactly as it should from an HTML perspective but there are a few more things we need to add for it to work in a React setting.

Ultimately we will be updating our list of tasks which means modifying the state in the container. We have already seen that we can pass a function through props which will enable the form to do this, but on this occasion we need to pass a new task to the function for it to be added. Waiting for the forms `submit` event to fire would give us access to the data in the form which we could use to build a task object but this is against an established React convention.

Instead we'll use state to track what the user has typed in each input field and submit those values when we add a new task to the list. This runs counter to what we have seen previously - components shouldn't have state, they should just handle presentation - but is actually a very common pattern. In general state should be held as high up in the application as it needs to be and in this case only our form needs to know about what's in the text boxes. Components with state like this are known as **controlled components** and forms are the most common example.

We add state hooks to our form component and set the `value` properties for the inputs so that they display what is currently held in the relevant state.

```jsx
// NewTaskForm.js

const NewTaskForm = () => {

	const [description, setDescription] = useState("");
   	const [priority, setPriority] = useState("")

    return (
        <>
            <h2>Add a new task:</h2>
            <form >
                <div className="formElement">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" value={description}/>
                </div>
                <div className="formElement">
                <label htmlFor="priority">Priority: </label>
                    <label htmlFor="priority">Priority: </label>
                    <input type="text" id="priority" value={priority}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )

}

```

We have a fairly significant problem now, though: we can't type in the form anymore! We need to add event handlers to update the state when a `change` event is fired by the `input` elements.

```jsx
// NewTaskForm.js

const NewTaskForm = () => {

	const [description, setDescription] = useState("");
   	const [priority, setPriority] = useState("")
   	
   	const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

   	const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    }

    return (
        <>
            <h2>Add a new task:</h2>
            <form >
                <div className="formElement">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" value={description} onChange={handleDescriptionChange}/>
                </div>
                <div className="formElement">
                <label htmlFor="priority">Priority: </label>
                    <label htmlFor="priority">Priority: </label>
                    <input type="text" id="priority" value={priority} onChange={handlePriorityChange}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )

}

```

Success, we can type things! Clicking `submit` still doesn't work though, we need another event handler for that.

```jsx
// NewTaskForm.js

// ...

const handleTaskSubmission = (event) => {
		  event.preventDefault();
        console.log("adding new event");
    }

    return (
        <>
            <h2>Add a new task:</h2>
            <form onSubmit={handleTaskSubmission}>
                <div className="formElement">
                
// ...

```

Submitting a form by default makes a POST request to a route we specify, refreshing the browser in the process. Calling the `preventDefault` method on the event stops this happening, meaning that we don't reload the state as soon as we add a new task to it. All we're doing at the moment though is logging a message, we need to write a function which will let us add it to the application's state.

```jsx
// ToDoContainer.js

const ToDoContainer = () => {

    // ...

    const addNewTask = (newTask) => {
        newTask.id = tasks.length + 1;
        setTasks([...tasks, newTask]);
    }

    return(
        tasks.length > 0 ?
            <>
                <NewTaskForm onTaskSubmission={addNewTask}/>
                <hr/>
                <TaskList thingsToDo={tasks}/>
            </>
        :
            <p>loading tasks...</p>
    )

}
```

We manually set the `id` property based on the number of tasks already there but this would usually be handled by the database we save the task to. Note that we cant simply push the new task on to the `tasks` array; if we do then the state change won't register since it is the array itself rahter than its contents which is stored in the variable. Instead we use the spread operator and create a new array which we add `newTask` to before setting state. We pass the function to the form component, which can then call it with the details of the new task.

```jsx
// NewTaskForm.js

const NewTaskForm = ({onTaskSubmission}) => {

	// ...
	
	const handleTaskSubmission = (event) => {
		event.preventDefault();

		const newTask = {
			description: description,
      		priority: priority,
      		completed: false
   		}

   		onTaskSubmission(newTask);
   		setDescription("");
   		setPriority("");
	}

// ...

```

We create an object to represent the new task before passing it to the event handler received in props. Finally we refresh the state to clear the input fields, ready for another task to be added.

## Different input types

Letting our users enter whatever they need to to describe a task is fine, but could get awkward when dealing with the "priority" field. It makes sense there to have the user pick from a range of pre-defined options and to do that we need a different `input` type. There are a number of options open to us but here we're going to replace the `input` element with a `select`. 

```jsx
// NewTaskForm.js

// ...

<form onSubmit={handleTaskSubmission}>
	<div className="formElement">
		<label htmlFor="description">Description: </label>
		<input type="text" id="description" value={description} onChange={handleDescriptionChange}/>
	</div>
	<div className="formElement">
		<label htmlFor="priority">Priority: </label>
    	<select id="priority" onChange={handlePriorityChange}>
      		<option value="low" key="low">Low</option>
        	<option value="medium" key="medium">Medium</option>
         	<option value="high" key="high">High</option>
      	</select>
   	</div>
   	<div className="formElement">
  		<input type="submit" value="Add Task"/>
   	</div>
</form>

// ...

```

Note that we don't need to modify the event handler. We will, however, modify our state so that we initialise it to have a valid value.

```jsx
// NewTaskForm.js

const [priority, setPriority] = useState("low");

```

## Updating Something in State

Passing functionality about between components lets us do much more than simply add things to a list. At some point we'll get round to doing the things on our todo list so we should probably have a way of checking them off. We'll still need to update something in state, but we won't be adding to it.

We're going to need to update the `Task` component so that we have some way of updating it. We'll add a button plus an event handler which for now will just log the fact we clicked it.

```jsx
// Task.js

const Task = ({thingToDo}) => {

    const handleTaskCompleted = () => {
        console.log("button clicked");
    }

    return(
        <div className="task">
            <h3>Description:</h3>
            <p>{thingToDo.description}</p>
            <h4>Priority:</h4>
            <p>{thingToDo.priority}</p>
            <h4>Completed?</h4>
            <p>{thingToDo.completed ? "Yes" : "No"}</p>
            <hr />
            <button onClick={handleTaskCompleted>Mark Complete</button>
        </div>
    )

}
```

We could make any updates in the `Task` component but if we do that it will diverge from what is stored in the application state. Recall that we want a *single source of truth* for our application which in this case is the `tasks` state in `ToDoContainer`. If we want to modify any of our tasks it needs to happen in the container. We will add a function which will have an `id` parameter and use it to identify which task to update.

```jsx
// ToDoContainer.js

// ...

    const markTaskComplete = (id) => {
        const updatedTasks = [...tasks];
        updatedTasks[id - 1].completed = true;
        setTasks(updatedTasks);
    }
    
// ...

```

Just like when we add a new task, we can't simply modify `tasks` or the state change doesn't register. Instead we create a new array, modify an element there and then update state. This function gets passed to `TaskList` through props and then on to the tasks themselves. Passing props through multiple components like this is not uncommon but can become difficult to manage in larger applications. Typically this is when state management tools such as Redux are introduced, or when we start considering the use of different *contexts* within our application.

```jsx
// ToDoContainer.js

// ...

    return(
        tasks.length > 0 ?
            <>
                <NewTaskForm onTaskSubmission={addNewTask}/>
                <hr/>
                <TaskList thingsToDo={tasks} onTaskCompleted={markTaskComplete}/>
            </>
        :
            <p>loading tasks...</p>
    )
```

```jsx
TaskList.js

const TaskList = ({thingsToDo, onTaskCompleted}) => {

    const taskComponents = thingsToDo.map(task => {
        return(
            <Task thingToDo={task} key={task.id} onTaskCompleted={onTaskCompleted}/>
        );
    });
    
// ...

```

```jsx
// Task.js

// ...

const handleTaskCompleted = (id) => {
 	onTaskCompleted(id);
}

// ...

```

The event handler needs an `id` which makes attaching the event handler to the element *slightly* more complicated. Instead of just passing the function we must define an anonymous function which calls the handler in its body.

```jsx
// Task.js

// ...

<button onClick={() => handleTaskCompleted(thingToDo.id)}>Mark Complete</button>

// ...
```

Now we can update the text in the component but it would be nice to have a further visual indicator if a task has been completed. We'll add a check to the `className` property to add a background colour if our task is complete.

```jsx
// Task.js

// ...

<div className={thingToDo.completed ? "task completed" : "task"}>

// ...
```

Now we have the front end of our first to-do app! Once we have a database set up to store our tasks we can just need to modify the `addNewTask` and `markTaskComplete` functions to point them at the back end instead of the state, but the rest of the code will work regardless of what we put it on top of.