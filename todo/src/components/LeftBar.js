import React from "react";

const LeftBar = ({showHide, clickShowOnlyUndone}) => {
    return (
        <div className="menu">
            <button id="done-button" onClick = {() => clickShowOnlyUndone(showHide)}>{showHide.title}</button> {/*onclick="showOnlyUndone(this)" */}
        </div>
    )
}

export default LeftBar;