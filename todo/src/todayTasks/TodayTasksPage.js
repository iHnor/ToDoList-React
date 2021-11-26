import React, { useState, useEffect } from 'react'
import TasksToday from './TasksToday';

function TodayTasksPage() {
  const [today, setToday] = useState([]);
  const [lists, setLists] = useState([]);
  const taskInDB = "http://localhost:3000/tasks";
  const listInDB = "http://localhost:3000/lists";

  useEffect(() => {
    fetch(taskInDB)
      .then(response => response.json())
      .then(res => setToday(res.filter(t => new Date(t.deadline).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0) && t.done === false)))

    fetch(listInDB)
      .then(response => response.json())
      .then(res => setLists(res))
  }, [])

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

  function deleteTask(task) {
    deleteFromDB(task);
    setToday(today.filter(t => t !== task));
  }
  function clickCheckBox(task) {
    let changeTask = today.filter(t => t.id !== task.id);
    changeInDB(task.id, !task.done);
    setToday(changeTask)
  }
  
  return (
    <div>
      <TasksToday
        task={today}
        lists={lists}
        onDelete={deleteTask}
        clickCheckBox={clickCheckBox}
      />
    </div>
  );

}

export default TodayTasksPage;
