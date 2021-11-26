import React from "react";
import { NavLink } from "react-router-dom";
import List from "./List";

const LeftBar = ({ showHide, clickShowOnlyUndone, lists, clickOnList }) => {
    return (
        <div className="menu">
            <button id="done-button" onClick={() => clickShowOnlyUndone(showHide)}>{showHide.title}</button>
            <NavLink to={"/today"}>
                <button id="done-button">На сьогодні</button>
            </NavLink>
            <h3>Списки</h3>
            {
                lists.map((l, id) => <List list={l} clickOnList={clickOnList} key={id} />)
            }
        </div >

    )
}

export default LeftBar;