const Task = ({task, onTaskCompletion}) => {

    return(
        <div className={task.completed ? "task completed" : "task"}>
            <h3>Description:</h3>
            <p>{task.description}</p>
            <h4>Priority:</h4>
            <p>{task.priority}</p>
            <h4>Completed?</h4>
            <p>{task.completed ? "Yes" : "No"}</p>
            <hr/>
            <button onClick={() => onTaskCompletion(task.id)}>Mark Complete</button>
        </div>
    )

}

export default Task;