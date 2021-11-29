import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

function TaskListPage() {
  const [tasksState, setTasks] = useState([]);
  const activeList = useParams();
  const taskInDB = "http://localhost:3000/tasks";

  useEffect(() => {
    fetch(taskInDB)
      .then(response => response.json())
      .then(res => setTasks(res.filter(r => r.list === Number(activeList.id))))

  }, [activeList.id])


  function addToDB(newTask) {
    return fetch(taskInDB, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(response => response.json())
      .then(res => addToState(res))
  }
  function deleteFromDB(task) {
    fetch(taskInDB + '/' + task.id, {
      method: 'DELETE'
    })
      .then(response => response.json())
  }

  function changeInDB(id, done) {
    fetch(taskInDB + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done })
    })
      .then(response => response.json())
  }

  function addToState(newTask) {
    setTasks([...tasksState, newTask])
  }
  function deleteTask(task) {
    deleteFromDB(task);
    setTasks(tasksState.filter(t => t !== task));
  }
  function clickCheckBox(task) {
    task.done = !task.done
    let changeTask = tasksState.map(t => t.id === task.id ? task : t);
    changeInDB(task.id, task.done);
    setTasks(changeTask)
  }

  const showHideTasks =
  {
    title: "Сховати виконані",
    click: false
  }
  const [showHide, setShowHide] = useState(showHideTasks);

  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    setTasks(tasksState.slice(0))

  }

  const visibleTasks = showHide.click ? tasksState : tasksState.filter(t => !t.done );
  
  return (

    <div className="tasks">

      <Tasks
        showHide={showHide}
        clickShowOnlyUndone={clickShowOnlyUndone}
        task={visibleTasks}
        onDelete={deleteTask}
        clickCheckBox={clickCheckBox}
      />
      <div className="footer">
        <TaskForm onSubmit={addToDB} lists={activeList} />
      </div>
    </div>

  );

}

export default TaskListPage;
