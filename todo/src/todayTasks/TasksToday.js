import React from 'react'

import TaskToday from './TaskToday';

const TodayTasks = ({ task, lists, onDelete, clickCheckBox }) => {
    return (
        <section id="tasks">
            {
                task.map((t, id) => <TaskToday key={id} task={t} lists={lists} onDelete={onDelete} clickCheckBox={clickCheckBox} />)
            }
        </section>
    )
}
export default TodayTasks;
