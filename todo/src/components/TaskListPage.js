import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import TaskForm from './TaskForm';
import Tasks from './Tasks';
import QueriesRestApi from './QueriesRestApi'


function TaskListPage() {
  const [tasksState, setTasks] = useState([]);
  const activeList = useParams();
  const listURL = "https://localhost:5001/list";
  const taskURL = "https://localhost:5001/task";
  const Queries = new QueriesRestApi();
  const showHideTasks =
  {
    title: "Сховати виконані",
    click: false
  }
  const [showHide, setShowHide] = useState(showHideTasks);

  useEffect(() => {
    fetch(listURL + "/" + activeList.id)
      .then(response => response.json())
      .then(res => setTasks(res))

  }, [activeList.id])

  function addToState(newTask) {
    Queries.create(newTask, taskURL);
    setTasks([...tasksState, newTask]);
  }
  function deleteInStage(task) {
    Queries.delete(task, taskURL);
    setTasks(tasksState.filter(t => t !== task));
  }
  function toggleTask(task) {
    task.done = !task.done
    let changeTask = tasksState.map(t => t.id === task.id ? task : t);
    Queries.updateTask(task.id, taskURL);
    setTasks(changeTask)
  }
  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    setTasks(tasksState.slice(0))

  }

  const visibleTasks = !showHide.click ? tasksState : tasksState.filter(t => !t.done);
  
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