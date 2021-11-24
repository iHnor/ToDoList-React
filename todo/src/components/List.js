import React from "react";

const List = ({ list, clickOnList }) => {
    return (
        <button className={list.active ? "list-button disabled" : "list-button"} disabled={list.active} onClick={() => clickOnList(list)}> {list.title} </button>
    )
}

export default List;