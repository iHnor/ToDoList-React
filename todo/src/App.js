import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
function App() {
  
  const tasks = [
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
      deadline: "2021-11-09",
      id: 2
    }
  ]

  const addNewTask = (task) => {
    console.log(task);
    this.tasks.push(task);
  }

  return (
    <div className="App">
      <h1>TodoList</h1>
      <main>
        <div className="menu">
           <button id="done-button">Скрыть выполененые</button> {/*onclick="showOnlyUndone(this)" */}
        </div>
        <Tasks task={tasks} />
      </main>
      <footer>
        <TaskForm onSubmit={addNewTask} />
      </footer>
    </div>
  );
}

export default App;
