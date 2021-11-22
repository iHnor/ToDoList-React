import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <main>
        <div className="menu">
          {/* <button id="done-button" onclick="showOnlyUndone(this)">Скрыть выполененые</button> */}
        </div>
        <section id="tasks">
          <div className="task" id="1">
            <div className="base">
              <input type = 'checkbox'/>
              <h2>Завдання на завтра</h2>
              <h3 className="expired-date">19.11</h3>
            </div>
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
