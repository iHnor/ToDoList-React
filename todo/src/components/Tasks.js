import React from 'react'

import Task from './Task';

const Tasks = ({task, onDelete}) => {
    return (
        <section id="tasks">
            {
                task.map((t, id) => <Task key={id} task={t} onDelete={onDelete} />)
            }
        </section>
    )
}
export default Tasks;
