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
  const [listsState, setLists] = useState({todayTasks: 0, unDoneList: [] });
  const listInDB = "https://localhost:5001/dashboard";

  useEffect(() => {
    fetch(listInDB)
      .then(response => response.json())
      .then(res => setLists(res))
  }, [])
  return (
    <Router>
      <div className="App">
        <h1>TodoList</h1>
        <main>
          <SideBar
            lists={listsState}
          />
          <Routes>
            <Route path="todo-list/:id" element={<TaskListPage />} />
            {/* <Route path="/today" element={<TodayTasksPage />} /> */}
          </Routes>
        </main>

      </div>
    </Router>
  );

}

export default App;