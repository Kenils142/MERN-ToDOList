import React from "react";
import Task from "./Task";

function TaskList({ tasks, filter, updateTask, deleteTask }) {
    const filteredTasks = tasks.filter(task => {
        if(filter === 'all') return true;
        return filter === 'completed' ? task.completed : !task.completed;
    });

    return (
        <ul className="task-list">
            {filteredTasks.map(task => (
                <Task
                    key={task._id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    )
}

export default TaskList;