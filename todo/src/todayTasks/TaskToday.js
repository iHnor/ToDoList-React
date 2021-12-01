import React from "react";
import { Link } from "react-router-dom";

function formatDate(deadline) {
    if (deadline) {
        let date = new Date(deadline);
        let day = date.getDate();
        let month = date.getMonth();
        return `${day < 10 ? `0${day}` : `${day}`}.${month < 10 ? `0${month + 1}` : month + 1}`;
    }
    else {
        return deadline;
    }
}

function isExpired(date) {
    return new Date(date).setHours(23, 59, 59) < new Date();
}


const Task = ({ today, onDelete, clickCheckBox }) => {

    

    return (
        <div className="task" id="1" >
            <div className="header-of-task">
                <input type='checkbox' checked={today.done ? "checked" : ""} onChange={() => clickCheckBox(today)} />
                <h2>{today.title}</h2>
                <h3 className={(isExpired(today.duedate) && !today.done) ? "expired-date" : ""}>{formatDate(today.duedate)}</h3>
            </div>
            <div className="description-delete">
                <p>{today.description}</p>
                <button onClick={() => onDelete(today)}>X</button>
            </div>
            <Link to={`/todo-list/${today.list.id}`} className="Today__link">
                {today.list.title + " >"} 
            </Link>
        </div>
    )
}

export default Task