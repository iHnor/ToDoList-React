import React from 'react'
import { useParams } from 'react-router';


const TaskForm = (props) => {
    const activeList = useParams(); 
    function onSubmitHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let contact = Object.fromEntries(formData.entries())

        const task =({
            title: contact.title,
            description: contact.description,
            duedate: contact.deadline,
            done: false,
            todoListId: activeList.id
        })
        event.target.reset()
        props.onSubmit(task)
    }


    return (
        <form name="task" autoComplete="off" onSubmit={onSubmitHandler}>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="description" placeholder="Description" />
            <input type="date" name="deadline" placeholder="Date" required />
            <button type="submit">Add</button>
        </form>
    )

}

export default TaskForm