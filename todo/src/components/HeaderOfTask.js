import React from 'react'

const HeaderOfTask = ({ task, clickCheckBox }) => {
    return (
        <div className="header-of-task">
            <input type='checkbox' checked = {task.done ? "checked" : ""} onChange={() => clickCheckBox(task)} />
              <h2>{task.title}</h2>
              <h3 className={new Date(task.deadline).setHours(23, 59, 59) < new Date() ? "expired-date" : ""}>{task.deadline}</h3>
        </div>
    )
}

export default HeaderOfTask