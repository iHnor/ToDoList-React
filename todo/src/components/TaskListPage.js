import React, { useState } from 'react'
import { useParams } from 'react-router';
import TaskForm from './TaskForm';
import Tasks from './Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { doneTask, createTask, removeTask } from '../store/tasks/actions'

function TaskListPage() {
  const [showHide, setShowHide] = useState({ title: "Сховати виконані", click: false });
  
  const activeList = useParams();
  const dispatch = useDispatch();
  
  function addTask(newTask) {
    dispatch(createTask(newTask));
  }
  function deleteTask(task) {
    console.log(task);
    dispatch(removeTask(task))
  }
  function toggleTask(task) {
    task.done = !task.done
    dispatch(doneTask(task))
  }
  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
  }

  const tmp = useSelector(state => state.tasks);

  return (
    <div className="tasks">
      <Tasks
        showHide={showHide}
        clickShowOnlyUndone={clickShowOnlyUndone}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
      <div className="footer">
        <TaskForm onSubmit={addTask} lists={activeList} />
      </div>
    </div>
  );

}

export default TaskListPage;