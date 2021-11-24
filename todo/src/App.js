import React, { useState } from 'react'
import './App.css';
import LeftBar from './components/LeftBar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {

  let initialTasks = [
    {
      title: "Завдання на завтра",
      description: "Потрібно виконати до завтрашнього дня",
      done: false,
      deadline: "2021-11-19",
      id: 1
    },
    {
      title: "Завдання з описом",
      description: "Трішки опису до завдання",
      done: true,
      deadline: "2021-11-25",
      id: 2
    }
  ]

  let showHideTasks =
  {
    title: "Сховати виконані",
    click: false
  }

  const [tasks, setTasks] = useState(initialTasks)
  const [showHide, setShowHide] = useState(showHideTasks)

  function addNewTask(newTask) {
    setTasks([...tasks, newTask])
  }
  function deleteTask(task) {
    setTasks(tasks.filter(t => t !== task));
  }
  function clickCheckBox(task) {
    task.done = !task.done
    let tmp = tasks.map(t => t === task ? task : t);
    setTasks(tmp)
  }

  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    setTasks(tasks.slice(0))
  }

  return (
    <div className="App">
      <h1>TodoList</h1>
      <main>
        <LeftBar showHide={showHide} clickShowOnlyUndone={clickShowOnlyUndone} />
        <Tasks
          task={tasks}
          onDelete={deleteTask}
          clickCheckBox={clickCheckBox}
        />
      </main>
      <footer>
        <TaskForm onSubmit={addNewTask} />
      </footer>
    </div>
  );

}

export default App;
