import React from "react";
import HeaderOfTask from '../components/HeaderOfTask';
import DescriptDeleteMove from './DescriptDeleteMove';

const Task = ({ task, lists, onDelete, clickCheckBox }) => {
    return (
        <div className={task.done ? "done-task task" : "task"} id="1" >
            <HeaderOfTask task={task} clickCheckBox={clickCheckBox} />
            <DescriptDeleteMove task={task} onDelete={onDelete} lists={lists} />
        </div>
    )
}

export default Task