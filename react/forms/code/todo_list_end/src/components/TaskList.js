import Task from "./Task";

const TaskList = ({tasks, onTaskCompletion}) => {

    const taskComponents = tasks.map(task => {
        return(
            <Task task={task} key={task.id} onTaskCompletion={onTaskCompletion}/>
        )
    })

    return(
        <div className="task-list">
            {taskComponents}
        </div>
    )

}

export default TaskList;