import React, { useState } from 'react'
import './App.css';
import LeftBar from './components/LeftBar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
 
  let initialTasks = [
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
  

  const [tasks, setTasks] = useState(initialTasks)
  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <main>
          <LeftBar />
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
