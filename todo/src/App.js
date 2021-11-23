import React, { Component } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

class App extends Component {
  state = {
    tasks: [
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
  }
  

  addNewTask = (task) => {
    this.setState({
      tasks:[...this.state.tasks, task]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <main>
          <div className="menu">
            <button id="done-button">Скрыть выполененые</button> {/*onclick="showOnlyUndone(this)" */}
          </div>
          <Tasks task={this.state.tasks} />
        </main>
        <footer>
          <TaskForm onSubmit={this.addNewTask} />
        </footer>
      </div>
    );
  }
}

export default App;
