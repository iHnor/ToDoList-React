import React from 'react'
import './App.css';
import TaskListPage from './components/TaskListPage'
import SideBar from './components/SideBar';
import TodayTasksPage from './todayTasks/TodayTasksPage'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>TodoList</h1>
        <main>
          <SideBar />
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