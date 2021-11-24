import React from "react";
import List from "./List";

const LeftBar = ({ showHide, clickShowOnlyUndone, lists, clickOnList }) => {
    return (
        <div className="menu">
            <button id="done-button" onClick={() => clickShowOnlyUndone(showHide)}>{showHide.title}</button>
            <h3>Списки</h3>
            {
                lists.map((l, id) => <List list={l} clickOnList={clickOnList} key={id}/>)
            }
        </div>

    )
}

export default LeftBar;