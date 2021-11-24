import React from "react";
import HeaderOfTask from './HeaderOfTask';
import DescriptDelete from './DescriptDelete';

const Task = ({ task, onDelete, clickCheckBox }) => {
    return (
        <div className={task.done ? "done-task task" : "task"} id="1" >
            <HeaderOfTask task={task} clickCheckBox={clickCheckBox}/>
            <DescriptDelete task={task} onDelete={onDelete}/>
        </div>
    )
}

export default Task