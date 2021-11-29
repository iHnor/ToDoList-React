import React, { useState, useEffect } from 'react'
import './App.css';
import TaskListPage from './components/TaskListPage'
import SideBar from './components/SideBar';
import TodayTasksPage from './todayTasks/TodayTasksPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [listsState, setLists] = useState([]);
  const listInDB = "http://localhost:3000/lists";

  useEffect(() => {
    fetch(listInDB)
      .then(response => response.json())
      .then(res => setLists(res))
  }, [])

  // const showHideTasks =
  // {
  //   title: "Сховати виконані",
  //   click: false
  // }
  // const [showHide, setShowHide] = useState(showHideTasks);

  function changeInDB(id, active) {
    fetch(listInDB + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ active })
    })
      .then(response => response.json())
  }

  // function clickShowOnlyUndone(clickButton) {
  //   clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
  //   clickButton.click = !clickButton.click;
  //   setShowHide(clickButton);
  //   setLists(listsState.slice(0))
  // }

  function clickOnList(clickList) {
    let activeList = listsState.find(l => l.active);
    if (activeList) {
      activeList.active = !activeList.active;
      listsState.map(l => l.id === activeList.id ? activeList : l)
      changeInDB(activeList.id, activeList.active)
    }
    clickList.active = !clickList.active;
    listsState.map(l => l.id === clickList.id ? clickList : l)
    changeInDB(clickList.id, clickList.active)
    setLists(listsState)
  }

  return (
    <Router>
      <div className="App">
        <h1>TodoList</h1>
        <main>
          <SideBar
            lists={listsState}
            clickOnList={clickOnList}
          />
          <Routes>
            <Route path="todo-list/:id" element={<TaskListPage />} />
            <Route path="/today" element={<TodayTasksPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );

}

export default App;