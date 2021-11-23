import './App.css';
import Tasks from './components/Tasks';
function App() {

  const task = [
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

  return (
    <div className="App">
      <h1>TodoList</h1>
      <main>
        <div className="menu">
          <button id="done-button" onclick="showOnlyUndone(this)">Скрыть выполененые</button>
        </div>
        <Tasks task={task} />
      </main>
      <footer>
        <form name="task">
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="description" placeholder="Description"/>
            <input type="date" name="deadline" placeholder="Date"/>
            <button type="submit">Add</button>
        </form>
    </footer>
    </div>
  );
}

export default App;
