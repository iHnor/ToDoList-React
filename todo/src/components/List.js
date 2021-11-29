import React from "react";
import { NavLink } from "react-router-dom"
const List = ({ list }) => {
    return (
        <NavLink to={`/todo-list/${list.id}`}>
            <button className="list-button" > {list.title} </button>
        </NavLink>

    )
}

export default List;