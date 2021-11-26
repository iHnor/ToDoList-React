import React from "react";
import { NavLink } from "react-router-dom"
const List = ({ list, clickOnList }) => {
    return (
        <NavLink to={`/todo-list/${list.id}`}>
            <button className="list-button" onClick={() => clickOnList(list)}> {list.title} </button>
            {/* <button className={list.active ? "list-button disabled" : "list-button"} disabled={list.active} onClick={() => clickOnList(list)}> {list.title} </button> */}
        </NavLink>

    )
}

export default List;