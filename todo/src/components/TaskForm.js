import React, { Component } from 'react'

class TaskForm extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let contact = Object.fromEntries(formData.entries())

        this.props.onSubmit({
            title: contact.title,
            description: contact.description,
            done: false,
            duedate: new Date(contact.deadline),
            todoListId: Number(this.props.lists.id)
        })
        event.target.reset()
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