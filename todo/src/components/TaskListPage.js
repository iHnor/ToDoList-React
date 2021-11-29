import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

function TaskListPage() {
  const [tasksState, setTasks] = useState([]);
  const activeList = useParams();
  const tasksURL = "https://localhost:5001/list";

  useEffect(() => {
    fetch(tasksURL + "/" + activeList.id)
      .then(response => response.json())
      .then(res => setTasks(res))

  }, [activeList.id])

  // function createTask(newTask) {
  //   return fetch(tasksURL, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newTask)
  //   })
  //     .then(response => response.json())
  //     .then(res => addToState(res))
  // }

  function deleteTask(task) {
    fetch(tasksURL + '/' + task.id, {
      method: 'DELETE'
    })
      .then(response => response.json())
  }

  function updateTask(id, done) {
    fetch(tasksURL + '/' + id, {
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
  function deleteInStage(task) {
    deleteTask(task);
    setTasks(tasksState.filter(t => t !== task));
  }
  function toggleTask(task) {
    task.done = !task.done
    let changeTask = tasksState.map(t => t.id === task.id ? task : t);
    updateTask(task.id, task.done);
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

  // const visibleTasks = showHide.click ? tasksState : tasksState.filter(t => !t.done);
  console.log(tasksState);
  return (

    <div className="tasks">
      <Tasks
        showHide={showHide}
        clickShowOnlyUndone={clickShowOnlyUndone}
        task={tasksState}
        onDelete={deleteInStage}
        onToggle={toggleTask}
      />
      <div className="footer">
        <TaskForm onSubmit={addToState} lists={activeList} />
        {/* <TaskForm onSubmit={createTask} lists={activeList} /> */}
      </div>
    </div>

  );

}

export default TaskListPage;