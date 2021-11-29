import React from 'react'

import Task from './Task';

const Tasks = ({showHide, clickShowOnlyUndone, task, onDelete, onToggle}) => {
    return (
        <section id="tasks">
            <button id="hide-show" onClick={() => clickShowOnlyUndone(showHide)}>{showHide.title}</button>
            {
                task.map((t, id) => <Task key={id} task={t} onDelete={onDelete} onToggle={onToggle} />)
            }
        </section>
    )
}
export default Tasks;
