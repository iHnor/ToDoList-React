import React from "react";
import List from "./List";

const LeftBar = ({showHide, clickShowOnlyUndone, lists}) => {
    return (
        <div className="menu">
            <button id="done-button" className="disabled" onClick = {() => clickShowOnlyUndone(showHide)}>{showHide.title}</button> 
            {
                lists.map((l, id) => <List key={id} list={l}/>)
            }
        </div>

    )
}

export default LeftBar;