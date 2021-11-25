import React, { useState, useEffect } from 'react'
import './App.css';
import LeftBar from './components/LeftBar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [listsState, setLists] = useState([]);

  useEffect(() => {
    const getTaskFromDB = "http://localhost:3000/tasks";
    const getListFromDB = "http://localhost:3000/lists";
    fetch(getTaskFromDB)
      .then(response => response.json())
      .then(res => setTasks(res))
    fetch(getListFromDB)
      .then(response => response.json())
      .then(res => setLists(res))  
  }, [])

  let showHideTasks =
  {
    title: "Сховати виконані",
    click: false
  }

  const [showHide, setShowHide] = useState(showHideTasks);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask])
  }
  function deleteTask(task) {
    setTasks(tasks.filter(t => t !== task));
  }
  function clickCheckBox(task) {
    task.done = !task.done
    let changeTask = tasks.map(t => t === task ? task : t);
    setTasks(changeTask)
  }
  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    setTasks(tasks.slice(0))
  }
  function clickOnList(clickList) {
    let tmp = listsState.find(l => l.active);
    tmp.active = !tmp.active;
    clickList.active = !clickList.active;
    setLists(listsState)
    setTasks(tasks.slice(0))
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
          task={tasks}
          onDelete={deleteTask}
          clickCheckBox={clickCheckBox}
          showHide={showHide.click}
        />
      </main>
      <footer>
        <TaskForm onSubmit={addNewTask} lists={listsState} />
      </footer>
    </div>
  );

}

export default App;
