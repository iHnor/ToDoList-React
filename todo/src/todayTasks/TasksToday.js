import React from 'react'

import TaskToday from './TaskToday';

const TodayTasks = ({ today, onDelete, clickCheckBox }) => {
    return (
        <section id="tasks">
            {
                today.map((t, id) => <TaskToday key={id} today={t} onDelete={onDelete} clickCheckBox={clickCheckBox} />)
            }
        </section>
    )
}
export default TodayTasks;
