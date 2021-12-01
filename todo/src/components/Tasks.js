import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../store/tasks/actions'
import { useParams } from 'react-router';
import React, { useEffect } from 'react'
import Task from './Task';

const Tasks = ({ showHide, clickShowOnlyUndone, onDelete, onToggle }) => {
    const activeList = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTasks(activeList.id))
    }, [activeList.id])
    const tasks = useSelector(state => state.tasks);
    const visibleTasks = !showHide.click ? tasks : tasks.filter(t => !t.done);

    return (
        <section id="tasks">
            <button id="hide-show" onClick={() => clickShowOnlyUndone(showHide)}>{showHide.title}</button>
            {
                visibleTasks.map((t, id) => <Task key={id} task={t} onDelete={onDelete} onToggle={onToggle} />)
            }
        </section>
    )
}
export default Tasks;
