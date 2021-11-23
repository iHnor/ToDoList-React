import React, { Component } from 'react'

class TaskForm extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('onSubmiteHandler');
        this.props.onSubmit({
            title: "Завдання з описом",
            description: "Трішки опису до завдання",
            done: true,
            deadline: "2021-11-09",
            id: 2
        })
    }

    render() {
        return (
            <form name="task" autoComplete="off" onSubmit={this.onSubmitHandler}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="description" placeholder="Description" />
                <input type="date" name="deadline" placeholder="Date" />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default TaskForm