import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import TaskForm from './TaskForm';
import Tasks from './Tasks';
import QueriesRestApi from './QueriesRestApi'


function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const activeList = useParams();
  const listURL = "https://localhost:5001/list";
  const taskURL = "https://localhost:5001/task";
  const taskAPI = new QueriesRestApi();
  const [showHide, setShowHide] = useState({ title: "Сховати виконані", click: false });

  useEffect(() => {
    fetch(listURL + "/" + activeList.id)
      .then(response => response.json())
      .then(res => setTasks(res))

  }, [activeList.id])

  function addToState(newTask) {
    taskAPI.create(newTask, taskURL)
    .then(res => setTasks([...tasks, res]))
  }
  function deleteInStage(task) {
    taskAPI.delete(task, taskURL);
    setTasks(tasks.filter(t => t !== task));
  }
  function toggleTask(task) {
    task.done = !task.done
    let changeTask = tasks.map(t => t.id === task.id ? task : t);
    taskAPI.update(task.id, taskURL);
    setTasks(changeTask)
  }
  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    setTasks(tasks.slice(0))

  }

  const visibleTasks = !showHide.click ? tasks : tasks.filter(t => !t.done);

  return (
    <div className="tasks">
      <Tasks
        showHide={showHide}
        clickShowOnlyUndone={clickShowOnlyUndone}
        task={visibleTasks}
        onDelete={deleteInStage}
        onToggle={toggleTask}
      />
      <div className="footer">
        <TaskForm onSubmit={addToState} lists={activeList} />
      </div>
    </div>

  );

}

export default TaskListPage;