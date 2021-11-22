import './App.css';
import HeaderOfTask from './components/HeaderOfTask';

function App() {

  const task = {
    title: "Завдання на завтра",
    description: "Потрібно виконати до завтрашнього дня",
    done: false,
    deadline: "2021-11-19",
    id: 1
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <main>
        <div className="menu">
          {/* <button id="done-button" onclick="showOnlyUndone(this)">Скрыть выполененые</button> */}
        </div>
        <section id="tasks">
          <div className="task" id="1">
            <HeaderOfTask task={task}/>
            <div className="description-delete">
              <p>Потрібно виконати до завтрашнього дня</p>
              <button>X</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
