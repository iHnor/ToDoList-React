import React from 'react'

import Task from './Task';

const Tasks = (props) => {
    return (
        <section id="tasks">
            {
                props.task.map((t,id) => <Task key={id} task={t}/>)
            }                     
        </section>
    )
}
export default Tasks;
