import React from "react";
import { NavLink } from "react-router-dom";
import List from "./List";

const LeftBar = ({ lists }) => {
    return (
        <div className="menu">

            <NavLink to={"/today"}>
                <button id="done-button">На сьогодні</button>
            </NavLink>
            <h3>Списки</h3>
            {
                lists.unDoneList.map((l, id) => <List list={l} key={id} />)
            }
        </div >

    )
}

export default LeftBar;