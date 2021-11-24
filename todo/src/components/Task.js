import React from "react";
import HeaderOfTask from './HeaderOfTask';
import DescriptDelete from './DescriptDelete';

const Task = ({ task, onDelete, clickCheckBox }) => {
    return (
            <HeaderOfTask task={task} clickCheckBox={clickCheckBox}/>
            <DescriptDelete task={task} onDelete={onDelete}/>
        </div>
    )
}

export default Task