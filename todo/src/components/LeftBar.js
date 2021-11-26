import React from "react";
import List from "./List";

const LeftBar = ({ showHide, clickShowOnlyUndone, lists, clickOnList, clickToday }) => {
    return (
        <div className="menu">
            <button id="done-button" onClick={() => clickShowOnlyUndone(showHide)}>{showHide.title}</button>
            <button id="done-button" onClick={(event) => clickToday(event.target)}>На сьогодні</button>
        
            <h3>Списки</h3>
            {
        lists.map((l, id) => <List list={l} clickOnList={clickOnList} key={id} />)
    }
        </div >

    )
}

export default LeftBar;