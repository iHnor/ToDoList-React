import React from "react"
import { Link } from 'react-router-dom'
const DescriptionDelete = ({ task, onDelete, lists }) => {    
    let title = '';
    let getTitle = lists.find(l => l.id === task.list);
    if(getTitle)
        title = getTitle.title;
    return (
        <div className="description-delete">
            <p>{task.description}</p>
            <Link to={`/todo-list/${task.list}`}>
                <button className="go-to-list">
                    {title}
                </button>
            </Link>
            <button onClick={() => onDelete(task)}>X</button>
            
        </div>
    )
}

export default DescriptionDelete