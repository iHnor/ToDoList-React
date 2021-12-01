import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadTodayTasks } from '../store/tasks/actions'
import TaskToday from './TaskToday';

const TodayTasks = ({ today, onDelete, clickCheckBox }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTodayTasks)
    }, [])
    const todayTasks = useSelector(state => state.tasks);
    console.log(todayTasks);
    return (
        <section id="tasks">
            {
                todayTasks.map((t, id) => <TaskToday key={id} today={t} onDelete={onDelete} clickCheckBox={clickCheckBox} />)
            }
        </section>
    )
}
export default TodayTasks;
