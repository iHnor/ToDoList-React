import React from 'react'

import Task from './Task';

const Tasks = ({showHide, clickShowOnlyUndone, task, onDelete, clickCheckBox}) => {
    return (
        <section id="tasks">
            <button id="hide-show" onClick={() => clickShowOnlyUndone(showHide)}>{showHide.title}</button>
            {
                task.map((t, id) => <Task key={id} task={t} onDelete={onDelete} clickCheckBox={clickCheckBox}/>)
            }
        </section>
    )
}
export default Tasks;
