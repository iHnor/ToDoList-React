import React from "react";
import DescriptionDeleteMove from './DescriptionDeleteMove';

function formatDate(deadline) {
    if (deadline){
        let date = deadline.split('-');
        return `${date[2]}.${date[1]}`;
    }
    else{
        return deadline;
    }
} 

const Task = ({ task, lists, onDelete, clickCheckBox }) => {
    return (
        <div className={task.done ? "done-task task" : "task"} id="1" >
            <div className="header-of-task">
                <input type='checkbox' checked={task.done ? "checked" : ""} onChange={() => clickCheckBox(task)} />
                <h2>{task.title}</h2>
                <h3 className={(new Date(task.deadline).setHours(23, 59, 59) < new Date() && !task.done) ? "expired-date" : ""}>{formatDate(task.deadline)}</h3>
            </div>
            <DescriptionDeleteMove task={task} onDelete={onDelete} lists={lists} />
        </div>
    )
}

export default Task