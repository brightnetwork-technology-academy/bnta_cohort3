import {useState, useEffect} from 'react';
import TaskList from "../components/TaskList";
import NewTaskForm from '../components/NewTaskForm';

const ToDoContainer = () => {

    const [tasks, setTasks] = useState([]);

    const getTaskData = () => {
        fetch("http://localhost:8080/tasks")
            .then(response => response.json())
            .then(data => setTasks(data));
    }

    useEffect(getTaskData, []);

    const addNewTask = (newTask) => {
        fetch("http://localhost:8080/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(getTaskData);
    }

    const updateTaskCompletion = (id) => {
        console.log("updating task " + id);
        const taskToUpdate = tasks.find(task => task.id === id);
        taskToUpdate.completed = true;

        fetch(`http://localhost:8080/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskToUpdate)
        })
            .then(getTaskData);
    }

    return(
        tasks.length > 0 ?
        <>
            <NewTaskForm onTaskSubmission={addNewTask}/>
            <hr/>
            <TaskList tasks={tasks} onTaskCompletion={updateTaskCompletion}/>
        </>
        :
        <p>loading...</p>
    )

}

export default ToDoContainer;