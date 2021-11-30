import React, { useState, useEffect } from 'react'
import TasksToday from './TasksToday';
import QueriesRestApi from "../components/QueriesRestApi"

function TodayTasksPage() {
  const [today, setToday] = useState([]);
  const Queries = new QueriesRestApi();
  const todayTasks = "https://localhost:5001/today";
  const taskURL = "https://localhost:5001/task";

  useEffect(() => {
    fetch(todayTasks)
      .then(response => response.json())
      .then(res => setToday(res))
  }, [])

  function deleteTask(task) {
    Queries.delete(task, taskURL);
    setToday(today.filter(t => t !== task));
  }
  function clickCheckBox(task) {
    Queries.update(task.id, taskURL)
    let changeTask = today.filter(t => t.id !== task.id);
    setToday(changeTask)
  }

  return (
    <div className="tasks">
      <TasksToday
        today={today}
        onDelete={deleteTask}
        clickCheckBox={clickCheckBox}
      />
    </div>
  );
}
export default TodayTasksPage;
