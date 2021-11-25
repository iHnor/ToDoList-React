import React, { useState, useEffect } from 'react'
import './App.css';
import LeftBar from './components/LeftBar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import { Link } from 'react-router-dom';

function App() {
  const [tasksState, setTasks] = useState([]);
  const [listsState, setLists] = useState([]);

  const taskInDB = "http://localhost:3000/tasks";
  const listInDB = "http://localhost:3000/lists";

  useEffect(() => {
    fetch(taskInDB)
      .then(response => response.json())
      .then(res => setTasks(res))
    fetch(listInDB)
      .then(response => response.json())
      .then(res => setLists(res))
  }, [])

  let showHideTasks =
  {
    title: "Сховати виконані",
    click: false
  }
  const [showHide, setShowHide] = useState(showHideTasks);

  function showTasksInList() {
    let getActiveList = listsState.find(l => l.active);
    fetch(taskInDB)
      .then(response => response.json())
      .then(res => setTasks(res.filter(t => t.list === getActiveList.id)))
  }

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
      body: JSON.stringify({done})
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
  function clickShowOnlyUndone(clickButton) {

    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    setTasks(tasksState.slice(0))
  }
  function clickOnList(clickList) {
    let activeList = listsState.find(l => l.active);
    if (activeList)
      activeList.active = !activeList.active;
    clickList.active = !clickList.active;
    showTasksInList();
    setLists(listsState)
    setTasks(tasksState.slice(0))
  }
  return (
    <div className="App">
      <h1>TodoList</h1>
      <main>
        <LeftBar
          showHide={showHide}
          clickShowOnlyUndone={clickShowOnlyUndone}
          lists={listsState}
          clickOnList={clickOnList}
        />
        <Tasks
          task={tasksState}
          onDelete={deleteTask}
          clickCheckBox={clickCheckBox}
          showHide={showHide.click}
        />
      </main>
      <footer>
        <TaskForm onSubmit={addToDB} lists={listsState} />
      </footer>
    </div>
  );

}

export default App;
