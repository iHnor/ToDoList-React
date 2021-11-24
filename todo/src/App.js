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
      id: 1,
      list: 1
    },
    {
      title: "Завдання з описом",
      description: "Трішки опису до завдання",
      done: true,
      deadline: "2021-11-25",
      id: 2,
      list: 2
    }
  ]

  let showHideTasks =
  {
    title: "Сховати виконані",
    click: false
  }

  let initialList = {
    activeList: {
      id: 1,
      title: "First List",
      active: true
    },
    lists: [
      {
        id: 1,
        title: "First List",
        active: true
      },
      {
        id: 2,
        title: "Second List",
        active: false
      },
      {
        id: 3,
        title: "Third List",
        active: false
      }
    ]
  }

  const [tasks, setTasks] = useState(initialTasks);
  const [showHide, setShowHide] = useState(showHideTasks);
  const [listsState, setLists] = useState(initialList);
  
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
    clickList.active = !clickList.active;
    if (listsState.activeList) {
      listsState.activeList.active = !listsState.activeList.active;
      listsState.lists = listsState.lists.map(l => l.id === listsState.activeList.id ? listsState.activeList : l);

    }
    listsState.activeList = clickList;
    listsState.lists = listsState.lists.map(l => l.id === clickList.id ? clickList : l);
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
          lists={listsState.lists}
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
        <TaskForm onSubmit={addNewTask} activeId={listsState.activeList.id} />
      </footer>
    </div>
  );

}

export default App;
