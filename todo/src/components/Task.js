import React from "react";
import HeaderOfTask from './HeaderOfTask';
import DescriptDelete from './DescriptDelete';

const Task = ({ task }) => {
    return (
        <div className="task" id="1">
            <HeaderOfTask task={task} />
            <DescriptDelete desc={task.description} />
        </div>
    )
}

export default Task