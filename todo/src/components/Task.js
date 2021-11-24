import React from "react";
import HeaderOfTask from './HeaderOfTask';
import DescriptDelete from './DescriptDelete';

const Task = ({ task, onDelete }) => {
    return (
        <div className="task" id="1">
            <HeaderOfTask task={task} />
            <DescriptDelete task={task} onDelete={onDelete}/>
        </div>
    )
}

export default Task