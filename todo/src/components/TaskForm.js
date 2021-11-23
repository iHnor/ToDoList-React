import React, { Component } from 'react'

class TaskForm extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            title: "Викдик за сабмітом",
            description: "Трішки опису",
            done: true,
            deadline: "2021-11-11",
            id: 3
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