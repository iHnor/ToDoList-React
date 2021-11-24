import React from 'react'

import Task from './Task';

const Tasks = ({task, onDelete, clickCheckBox}) => {
    return (
        <section id="tasks">
            {
                task.map((t, id) => <Task key={id} task={t} onDelete={onDelete} clickCheckBox={clickCheckBox}/>)
            }
        </section>
    )
}
export default Tasks;
