import React from "react"

const DescriptDelete = ({task, onDelete}) => {
    return (
        <div className="description-delete">
            <p>{task.description}</p>
            <button onClick={() =>onDelete(task)}>X</button>
        </div>
    )
}

export default DescriptDelete