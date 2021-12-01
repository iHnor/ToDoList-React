import React, { useState } from 'react'
import { useParams } from 'react-router';
import TaskForm from './TaskForm';
import Tasks from './Tasks';
import QueriesRestApi from './QueriesRestApi'
import { useDispatch, useSelector } from 'react-redux';
import { doneTask } from '../store/tasks/actions'

function TaskListPage() {
  const activeList = useParams();
  // const listURL = "https://localhost:5001/list";
  const taskURL = "https://localhost:5001/task";
  const taskAPI = new QueriesRestApi();
  const [showHide, setShowHide] = useState({ title: "Сховати виконані", click: false });

  const dispatch = useDispatch();
  // const tasks = useSelector(state => state.tasks);
  // useEffect(() => {
  //   // fetch(listURL + "/" + activeList.id)
  //   //   .then(response => response.json())
  //   //   .then(res => setTasks(res))
  //   dispatch(loadTasks(activeList.id))
  // }, [activeList.id])

  function addTask(newTask) {
    console.log(newTask);

    // taskAPI.create(newTask, taskURL)
    // .then(res => setTasks([...tasks, res]))
  }
  function deleteInStage(task) {
    taskAPI.delete(task, taskURL);
    // setTasks(tasks.filter(t => t !== task));
  }
  function toggleTask(task) {
    task.done = !task.done
    // console.log(task.id);
    dispatch(doneTask(task))
    

    // let changeTask = tasks.map(t => t.id === task.id ? task : t);
    // taskAPI.update(task.id, taskURL);
    // setTasks(changeTask)
  }
  function clickShowOnlyUndone(clickButton) {
    clickButton.title = clickButton.title === "Сховати виконані" ? "Показати всі" : "Сховати виконані";
    clickButton.click = !clickButton.click;
    setShowHide(clickButton);
    // setTasks(tasks.slice(0))
  }
  const tmp = useSelector(state => state.tasks);
  console.log(tmp);
  return (
    <div className="tasks">
      <Tasks
        showHide={showHide}
        clickShowOnlyUndone={clickShowOnlyUndone}
        onDelete={deleteInStage}
        onToggle={toggleTask}
      />
      <div className="footer">
        <TaskForm onSubmit={addTask} lists={activeList} />
      </div>
    </div>
  );

}

export default TaskListPage;